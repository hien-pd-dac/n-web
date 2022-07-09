import "./VideoScreen.css";

const VideoScreen = () => {
  return (
    <div id="video-screen">
      <video width="980" height="600" controls>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoScreen;
