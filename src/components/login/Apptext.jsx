import { useState } from "react";
import './Login.css'
const Apptext = ({ type, placeholder, icon, value, onChange }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown && type === "password" ? "text" : type}
        placeholder={placeholder}
        className="input-field"
        value={value}
        onChange={onChange}
        required
      />
      {icon}

      {type === "password" && (
        <i
          onClick={() => setIsPasswordShown((prevState) => !prevState)}
          className={`fa-solid ${
            isPasswordShown ? "fa-eye" : "fa-eye-slash"
          } eye-icon`}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default Apptext;

