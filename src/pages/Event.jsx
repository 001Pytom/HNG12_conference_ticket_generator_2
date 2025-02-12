import { useState } from "react";
import { ticketTypes } from "../utils/helpers";
import SelectBtn from "../components/SelectBtn";
import Techember from "../features/Event/Techember";
import Line from "../ui/Line";
import SelectTicket from "../features/Event/SelectTicket";
import { useNavigate } from "react-router-dom";
import { useSelectTicket } from "../utils/SelectTicketContext";

function Event() {
  const navigate = useNavigate();
  const { selectedTicket, ticketCount, setTicketCount, handleTicketClick } = useSelectTicket();

  return (
    <>
      <Techember />
      <Line />

      <SelectTicket
        selectedTicket={selectedTicket}
        handleTicketClick={handleTicketClick}
      />

      <div className="space-y-2">
        <p>Number of Tickets:</p>
        <select
          className="w-full p-3 border border-custom rounded-lg outline-none bg-transparent"
          value={ticketCount}
          onChange={(e) => setTicketCount(Number(e.target.value))}
        >
          <option value="1" className="bg-secondary">
            {ticketCount}
          </option>
          {[
            ...Array(
              ticketTypes.find((t) => t.type === selectedTicket)?.slotLeft || 1
            ),
          ].map((_, i) => (
            <option key={i} value={i + 1} className="bg-tertiary   ">
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full border border-custom md:px-12 rounded-3xl flex flex-col md:flex-row gap-4 md:gap-8  ">
        <SelectBtn text="Cancel" className="bg-tertiary  text-primary" onClick={() => navigate("/")} />
        <SelectBtn
          text="Next"
          className="text-white bg-primary"
          onClick={() => navigate("/form")}
        />
      </div>
    </>
  );
}

export default Event;
