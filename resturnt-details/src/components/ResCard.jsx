import './ResCard.css';
const ResCard = (
  {
    name, cat, cost, image, min, rating, reviews, time, votes, forTwo,cost_for_two
  }
) => {
  console.log(forTwo)
  return (
    <div className="cardContainer">
      <div className="infoDiv">
        <div className="imgDiv">
          <img src={image} alt="" />
        </div>
        <div className="info">
          <p className="title">{name}</p>
          <p className="category">{cat}</p>
          <p className="costOne">{{forTwo}?`Cost For ₹${cost} one`:`Cost For ₹${cost_for_two} Two`}</p>
          <p className="orderInfo">
            <span>Min ₹{min}</span>
            <li>Up to {time} min</li>
          </p>
          <p className="payments">Accepts Online Payments Only</p>
        </div>
        <div className="ratings">
          <p className="rating">{rating}</p>
          <p className="votes">{votes} votes</p>
          <p className="reviews">{reviews} reviews</p>
        </div>
      </div>
      <div className="orderBtn">
        <button>Order Online</button>
      </div>
    </div>
  );
};

export default ResCard