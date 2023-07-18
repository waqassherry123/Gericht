import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-conent_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing as Debitis elit.
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          necessitatibus molestias tempore, nihil reprehenderit in esrt tui
          distinctio. Alias eum nulla sapiente illum nihil, consequuntur tor
          doloremque libero ducimus fugit.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Joe Alex</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
