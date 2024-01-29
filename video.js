// videoHandler.js

export default function playVideo() {
    const videoElement = document.getElementById('myVideo');

    if (videoElement) {
        videoElement.src = 'C:\Users\stepl\Downloads\pexels-curtis-adams-5697985 (2160p).mp4'; // Adjust the path accordingly
        videoElement.play();
    }
}
