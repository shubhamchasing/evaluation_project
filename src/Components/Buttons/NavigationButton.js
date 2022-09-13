import { Link } from "react-router-dom";

const NavigationButton = ({ to, onClick, value, isDisabled }) => {
  const btnEnableDisable = !isDisabled ? "nav-btn-enable" : "nav-btn-disabled";

  return (
    <Link
      to={to}
      className="link"
      onClick={(e) => {
        if (isDisabled) e.preventDefault();
      }}
    >
      <button
        type="button"
        onClick={(e) => {
          onClick(e);
        }}
        className={`nav-btn ${btnEnableDisable}`}
        value={value}
      >
        {value}
      </button>
    </Link>
  );
};

export default NavigationButton;
