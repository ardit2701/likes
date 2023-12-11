function LikePost(postId) {
    var numLikes = parseInt(document.getElementById(postId).innerText, 10);
    document.getElementById(postId).innerText = numLikes + 1;
}