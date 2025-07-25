import "./home.css"; 
import headerImg from "../../assets/images/avataaars.svg"

export default function Home() {
  return (
    <div className="home-container">
      <img src={headerImg} alt="headerImg" width="300px" height="300px" />
      <h1 className="home-title">START FRAMEWORK</h1>
      <div className="home-divider">
        <span className="line"></span>
        <span className="star">&#9733;</span>
        <span className="line"></span>
      </div>
      <p className="home-subtitle">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}