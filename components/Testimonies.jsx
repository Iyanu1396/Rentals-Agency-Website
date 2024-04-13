import styles from "./Testimonies.module.css";
import harry from "../src/assets/harry.png";
import videoBg from "../src/assets/videobg.png";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

// const testimonies = [{}, {}, {}];

function Testimonies() {
  return (
    <section className={styles.testimonies}>
      <div className="container">
        <i
          className="fa-solid fa-quote-left"
          style={{ fontSize: "3em", color: "rgba(244, 81, 30, 0.3)" }}
        ></i>
        <p className={styles.feedback}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
          pellentesque est. Curabitur at odio sit amet libero vulputate
          efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
          faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
          fringilla finibus.
        </p>
        <div className={styles.wrapper}>
          <img src={harry} alt="" />
          <div>
            <p className={styles.name}>Harry Wilson</p>
            <p className={styles.occupation}>Property Owner</p>
          </div>
        </div>
        <div className={styles.sliderControl}>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle"></i>
        </div>
      </div>
      <Player
        playsInline
        poster={videoBg}
        src="https://videos.pexels.com/video-files/7578544/7578544-uhd_3840_2160_30fps.mp4"
      />
    </section>
  );
}

export default Testimonies;
