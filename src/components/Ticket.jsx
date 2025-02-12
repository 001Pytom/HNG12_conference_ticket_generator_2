import React from "react";

function Ticket({ type, slotLeft, price, isSelected, onClick }) {
  return (
    <div
      className={`flex flex-col  gap-3 p-3 w-full  border-2 border-secondary rounded-xl cursor-pointer transition-all text-textGray ${
        isSelected ? "bg-bgSelectTicket" : "bg-transparent"
      }`}
      onClick={() => onClick(type)}
    >
      <h3
        className={` font-roboto text-2xl font-semibold `}
      >
        {price}
      </h3>
      <div>
        <p className="font-roboto text-base font-normal uppercase">{type}</p>
        <p className="font-roboto text-sm font-normal">{slotLeft}</p>
      </div>
    </div>
  );
}

export default Ticket;
