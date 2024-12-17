import React from "react";

function Click_event() {
  const imgUrl =
    "https://safebooru.org//samples/1795/sample_d8a0f1a834c31636b4b85e31777b54591385af97.jpg?5370007";

  const handleClick = () => console.log("OUCH");
  return (
    <>
      <img className="click_image" src={imgUrl} onClick={handleClick}></img>
    </>
  );
}

export default Click_event;
