function get_random_image()
{
    
    let api='https://source.unsplash.com/random/300*200?sig=${Math.random()}'
    fetch(api).then(res=>{
        return res
    }).then(data=>{
        display_image(data.url)
    }).catch(e=>console.log("error"))
}

function display_image(image){
    document.getElementById("image").src=image;
}
var intervalId=0
function get_image()
{
    clearInterval(intervalId);
    intervalId=setInterval(get_random_image,1000);

}
function stop_image()
{
    clearInterval(intervalId);
}