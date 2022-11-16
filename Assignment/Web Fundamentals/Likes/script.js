var likeCnt = 0;

function displayLike(){
    document.getElementById("noOfLikes").innerText = likeCnt + " like(s)";
}

function likeBnHandler(){
    likeCnt++;
    console.log("Like Count - "+ likeCnt);

    displayLike();
}
