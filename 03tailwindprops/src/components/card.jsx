import React from "react";

function Card({type, name, username, src}) { // destructuring props
  //   console.log(props);
  return (
    <div className="w-60 m-10 flex flex-col rounded-xl bg-black min-h-[19rem] ">
      <div>
        <img
          src={src}
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          {/* <h1 className="font-bold ">Bored ape nft accidental</h1> */}
          <h2 className="text-white">{name}</h2>
        </div>
        <div className="flex  justify-between">
          <p className="text-white">{username}</p>
          <p className="text-white">{type}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
