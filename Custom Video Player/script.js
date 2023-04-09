const videoEl=document.getElementById("video");
const playEl=document.getElementById("play");
const stopEl=document.getElementById("stop");
const progressEl=document.getElementById("progress");
const timestampEl=document.querySelector(".timestamp")

function toggleVideoStatus(){
    if(videoEl.paused){
        videoEl.play();
    }else{
        videoEl.pause()
    }
}

function updatePlayIcon(){
    if(videoEl.paused){
        playEl.innerHTML=`<i class="fa fa-play fa-2x"></i>`
    }else{
        playEl.innerHTML=`<i class="fa fa-pause fa-2x"></i>`
    }
}


function updateProgress(){
    progressEl.value=(videoEl.currentTime/videoEl.duration)*100;
let mins=Math.floor(videoEl.currentTime/60);
if(mins<10){
    mins="0"+String(mins);
}
let secs=Math.floor(videoEl.currentTime%60);
if(secs<10){
    secs="0"+String(secs);
}
timestampEl.innerHTML=`${mins}:${secs}`;

}

function setVideoProgress(){
    videoEl.currentTime=(+progressEl.value*videoEl.duration)/100;
}


function stopVideo(){
    videoEl.currentTime=0;
    videoEl.pause();
}

//event listener
videoEl.addEventListener("click",toggleVideoStatus)
videoEl.addEventListener("pause",updatePlayIcon);
videoEl.addEventListener("play",updatePlayIcon);
videoEl.addEventListener("timeupdate",updateProgress);

playEl.addEventListener("click",toggleVideoStatus);
stopEl.addEventListener("click",stopVideo);
progressEl.addEventListener("change",setVideoProgress);