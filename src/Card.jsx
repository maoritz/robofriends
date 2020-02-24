import React from "react";

const Card = ({ name, userName, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/test${id}?10*10`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{userName}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
