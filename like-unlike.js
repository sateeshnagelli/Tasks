let puppyImageJs = document.getElementById("puppyImage");
let likeIconJs = document.getElementById("likeIcon");
let likeButtonJs = document.getElementById("likeButton");
let messageLiked = true
function onClickLikeButton() {
    if (messageLiked === true) {
        puppyImageJs.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeButtonJs.style.backgroundColor = "#0967D2";
        likeIconJs.style.color = "#0967D2";
        likeButtonJs.style.color = "#FFFFFF"
        messageLiked = false
    } else {
        puppyImageJs.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeButtonJs.style.backgroundColor = "#CBD2D9";
        likeIconJs.style.color = "#9AA5B1";
        likeButtonJs.style.color = "#CBD2D9"
        messageLiked = true
    }
}