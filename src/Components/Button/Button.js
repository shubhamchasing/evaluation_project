const Button = ({ option, text, onClick, value }) => {
  // console.log(value)
  return (
    <button
      type="button"
      onClick={(e) => onClick(e)}
      value={value}
      className="btn"
    >
      <div className="btn-option">{option}</div>
      <div className="btn-text">{text}</div>
    </button>
  );
};

export default Button;
