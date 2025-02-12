import Ticket from "../../components/Ticket";
import { ticketTypes } from "../../utils/helpers";

function SelectTicket({ selectedTicket, handleTicketClick }) {
  return (
    <div className="space-y-2">
      <p>Select Ticket Type:</p>
      <div className="border border-custom bg-bgcTikectsBox p-4 rounded-3xl flex flex-col md:flex-row justify-between gap-4">
        {ticketTypes.map((ticketType) => (
          <Ticket
            key={ticketType.type}
            type={ticketType.type}
            price={ticketType.price}
            slotLeft={`${ticketType.slotLeft} left!`}
            isSelected={selectedTicket === ticketType.type}
            onClick={handleTicketClick}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectTicket;
