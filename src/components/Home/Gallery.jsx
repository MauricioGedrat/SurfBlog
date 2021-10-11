import React from "react";
import Img1 from "../../assets/bishop.jpg";
import Img2 from "../../assets/cedric.jpg";
import Img3 from "../../assets/nylund.jpg";
import Img4 from "../../assets/surf.jpg";
import Img5 from "../../assets/oceanScene.jpg";
import Img6 from "../../assets/wave.jpg";
import Img7 from "../../assets/sea.jpg";
import Img8 from "../../assets/beach.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="block">
        <div className="lg:flex block">
          <div>
            <img
              src={Img1.src}
              layout="responsive"
              className="w-72 h-44 m-5 rounded-xl max-w-full"
            />
          </div>
          <div>
            <img
              src={Img2.src}
              layout="responsive"
              className="w-72 h-44 m-5 rounded-xl max-w-full"
            />
          </div>
        </div>
        <div className="lg:flex block">
          <div>
            <img
              src={Img3.src}
              layout="responsive"
              className="w-72 h-44 m-5 rounded-xl max-w-full"
            />
          </div>
          <div>
            <img
              src={Img4.src}
              layout="responsive"
              className="w-72 h-44 m-5 rounded-xl max-w-full"
            />
          </div>
        </div>

        <div className="lg:flex block">
          <div>
            <img
              src={Img5.src}
              layout="responsive"
              className="w-72 h-44 m-5 rounded-xl max-w-full"
            />
          </div>
          <div>
            <img
              src={Img6.src}
              layout="responsive"
              className="w-72 h-44 m-5 rounded-xl max-w-full"
            />
          </div>
        </div>
        <div className="lg:flex block">
          <div>
            <img
              src={Img7.src}
              layout="responsive"
              className="w-72 h-44 m-5 rounded-xl max-w-full"
            />
          </div>
          <div>
            <img
              src={Img8.src}
              layout="responsive"
              className="w-72 h-44 m-5 rounded-xl max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
