import React, { useState } from "react";

function Image_Changer() {
  const imgUrl = [
    {
      id: 1,
      name: "Saber",
      url: "https://static.atlasacademy.io/JP/CharaGraph/100200/100200a@1.png",
    },
    {
      id: 2,
      name: "Archer",
      url: "https://static.atlasacademy.io/JP/CharaGraph/200100/200100a@1.png",
    },
    {
      id: 3,
      name: "Lancer",
      url: "https://static.atlasacademy.io/JP/CharaGraph/303230/303230a.png",
    },
    {
      id: 4,
      name: "Rider",
      url: "https://static.atlasacademy.io/JP/CharaGraph/401400/401400b@2.png",
    },
    {
      id: 5,
      name: "Caster",
      url: "https://static.atlasacademy.io/JP/CharaGraph/500500/500500b@2.png",
    },
    {
      id: 6,
      name: "Assassin",
      url: "https://static.atlasacademy.io/JP/CharaGraph/603340/603340a.png",
    },
    {
      id: 7,
      name: "Berserker",
      url: "https://static.atlasacademy.io/JP/CharaGraph/700100/700100b@2.png",
    },
  ];
  const [image, setImage] = useState(0);

  const Prev_Image = () => {
    setImage((prevIndex) =>
      prevIndex === 0 ? imgUrl.length - 1 : prevIndex - 1
    );
  };
  const Next_Image = () => {
    setImage((prevIndex) =>
      prevIndex === imgUrl.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <div className="useState_image_wrapper">
        <img id="useState_image" src={imgUrl[image].url} />
      </div>
      <div>
        <button className="useState_button" onClick={Prev_Image}>
          Prev
        </button>
        <button className="useState_button" onClick={Next_Image}>
          Next
        </button>
      </div>
    </>
  );
}

export default Image_Changer;
