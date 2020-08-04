const video = document.getElementById('video')

function startup() {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    }).then(stream => {
        video.srcObject = stream;
    }).catch(console.error)
}

window.addEventListener('load', startup, false)