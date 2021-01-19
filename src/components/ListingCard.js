import React, {useState} from "react";

function ListingCard({ listing, onDelete }) {
  const {description, image, location} = listing
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={() => setIsFavorited(!isFavorited)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setIsFavorited(!isFavorited)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => onDelete(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
