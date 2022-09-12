const Button = ({ text, onClick, value, selected }) => {
  // console.log(value)
  return (
    <button
      type="button"
      onClick={(e) => onClick(e)}
      value={value}
      className={selected ? "btn btn-selected" : "btn"}
    >
      <div className="btn-option">{value}</div>
      <div className="btn-text">{text}</div>
    </button>
  );
};

export default Button;
