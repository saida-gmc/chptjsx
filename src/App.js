import logo from "./logo.svg";
import "./style.css";
import mySrcImage from "./imageInSrc.jpg";

function App() {
  return (
    <div>
      <div
        className="Head"
        style={{ border: "solid 1px black", maxwidth: "100vw" }}
      >
        <h1 className="titleRed">difference between public and src</h1>

        <img className="myImage" src={mySrcImage} alt="myImageSrc" />

        <img className="myImage" src="/imageInPublic.jpg" alt="myimagePublic" />
      </div>

      <video
        className="myVideo"
        width="320"
        height="240"
        controls
        src="myVideo.mp4"
        type="video/mp4"
      ></video>
    </div>
  );
}

export default App;
