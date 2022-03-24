import { useState } from "react";

function ColorPicker() {
  const [ isDarkText, setIsDarkText ] = useState(true);
  const [ myColor, setMyColor] = useState(
    JSON.parse(localStorage.getItem("themeColor")) || "");

  localStorage.setItem("themeColor", JSON.stringify(myColor));

  const passStyles = {
    background: myColor,
    color: isDarkText ? "#000" : "#fff",
  };

  return (
    <section className="ColorPicker__section  scale-up-center" id="colorpicker" >
      <div className="ColorPicker__screen" style={passStyles}>
        <p>{myColor ? myColor : null}</p>
      </div>
      <form className="ColorPicker__form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="ColorPicker">Enter your favourite color</label>
        <input
          style={passStyles}
          type="text"
          id="ColorPicker"
          placeholder="Enter your favourite color"
          value={myColor}
          onChange={(e) => setMyColor(e.target.value)}
        />
      </form>
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </section>
  );
}

export default ColorPicker;
