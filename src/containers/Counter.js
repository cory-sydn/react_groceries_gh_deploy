import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FaEyeDropper } from "react-icons/fa";
import ColorPicker from "../components/ColorPicker";

const Counter = () => {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("result")) || 0
  );

  const handleDecrement = () => {
    const newCount = (count) => count - 1;
    setCount(newCount);
    localStorage.setItem("result", JSON.stringify(count - 1));
  };

  const handleIncrement = () => {
    const newCount = (count) => count + 1;
    setCount(newCount);
    localStorage.setItem("result", JSON.stringify(count + 1));
  };
  //--ColorPicker--//
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <section className="Counter_section">
      <div className="Counter_buttons">
        <button onClick={handleDecrement}>-</button>
        {count}
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="section_switch">
        {toggleMenu ? (
          <button className="ColorPicker_button">            
            <RiCloseLine 
              color="#fff"
              size={21}
              onClick={() => setToggleMenu(false)}
            />
          </button>
        ) : (
          <button className="ColorPicker_button">
            <FaEyeDropper 
              color="#fff"
              size={21}
              onClick={() => setToggleMenu(true)}
              area-label="color picker"
            />
          </button>
        )}
        {toggleMenu && (
          <div>
            <ColorPicker />
          </div>
        )}
      </div>
    </section>
  );
};
export default Counter;
