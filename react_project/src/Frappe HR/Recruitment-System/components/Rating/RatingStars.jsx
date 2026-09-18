import "./RatingStars.css";

function RatingStars({ rating }) {

  const stars = [];

  for (let i = 1; i <= 10; i++) {

    stars.push(
      <span
        key={i}
        className={i <= rating ? "filled" : ""}
      >
        ★
      </span>
    );

  }

  return (
    <div className="rating-stars">
      {stars}
    </div>
  );
}

export default RatingStars;