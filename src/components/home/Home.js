import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="text container">
          <h1>New Arivals</h1>
          <p className="sub_heading">get up to 50% on first purchase</p>
          <button className="btn signup">Buy Now</button>
        </div>
        <div className="image container">
          <img src="./assets/hero-image.png" className="banner" alt="img" />
        </div>
      </div>
      <h2 className="sub">Our Brand offers</h2>
      <div className="section">
        <div className="image_section contain">
          <img src="./assets/side_image.jpg" alt="shoes_image" />
        </div>
        <div className="text_section contain">
          <h1 className="heading">High Quality Shoes</h1>
          <p className="sub_heading">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            sed fuga molestias quae vel, quia eum libero aspernatur voluptas
            cupiditate hic tempora asperiores nihil consequuntur inventore
            fugiat distinctio, necessitatibus nobis.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="text_section contain">
          <h1 className="heading">Wide Range of Collection</h1>
          <p className="sub_heading">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            sed fuga molestias quae vel, quia eum libero aspernatur voluptas
            cupiditate hic tempora asperiores nihil consequuntur inventore
            fugiat distinctio, necessitatibus nobis.
          </p>
        </div>
        <div className="image_section contain">
          <img src="./assets/collection.jpg" alt="shoes_image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
