import React, { useState } from "react";

function Objects() {
  const [servant, setServant] = useState({
    serClass: "Saber",
    serName: "Emiya",
    serRarity: 2,
  });

  function handleClassChange(event) {
    setServant((s) => ({ ...s, serClass: event.target.value }));
  }
  function handleNameChange(event) {
    setServant((s) => ({ ...s, serName: event.target.value }));
  }
  function handleRarityChange(event) {
    setServant((s) => ({ ...s, serRarity: event.target.value }));
  }
  return (
    <>
      <input
        type="text"
        value={servant.serClass}
        onChange={handleClassChange}
      />
      <br />
      <input type="text" value={servant.serName} onChange={handleNameChange} />
      <br />
      <input
        type="number"
        value={servant.serRarity}
        onChange={handleRarityChange}
      />
      <br />

      <div>
        <p>{servant.serClass}</p>
        <p>{servant.serName}</p>
        <p>{servant.serRarity}</p>
      </div>
    </>
  );
}

export default Objects;
