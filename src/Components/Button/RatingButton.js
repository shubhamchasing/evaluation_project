const RatingButton = ({ onClick, value, selected }) => {
  return (
    <button
      className={selected ? "btn-rating btn-rating-selected" : "btn-rating"}
      onClick={ (e) => {
        onClick(e);
      }}
      value={value}
      type="button"
    >
      {value}
    </button>
  );
};

export default RatingButton;
