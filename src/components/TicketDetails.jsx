import { useSelectTicket } from "../utils/SelectTicketContext";
import { useUserForm } from "../utils/UserFormContext";

function TicketDetails() {
  const { ticketCount, selectedTicket } = useSelectTicket();
  const { ticket } = useUserForm();

  return (
    <div className="w-full rounded-lg md:p-1 border border-ticketBorder bg-bgTicketDetails flex flex-col">
      <div className="w-full  border-b border-bgSelectTicket flex justify-between">
        <span className="w-full max-w-[108px] p-1 border-r border-bgSelectTicket space-y-1">
          <p className="font-roboto text-[10px] opacity-[33%]">
            Enter Your Name
          </p>
          <h3 className="font-roboto text-xs">
            {ticket?.name || "Avi Chukwu"}
          </h3>
        </span>{" "}
        <span className="w-full max-w-[108px] p-1 space-y-1">
          <p className="font-roboto text-[10px] opacity-[33%]">
            Enter Your Email *
          </p>
          <h3 className="font-roboto text-xs break-all ">
            {ticket?.email || "User@email.com"}
          </h3>
        </span>
      </div>
      <div className="w-full  border-b border-bgSelectTicket flex justify-between">
        <span className="w-full max-w-[108px] p-1 border-r border-bgSelectTicket space-y-1">
          <p className="font-roboto text-[10px] opacity-[33%]">Ticket Type</p>
          <h3 className="font-roboto text-xs">{selectedTicket}</h3>
        </span>
        <span className="w-full max-w-[108px] p-1  space-y-1">
          <p className="font-roboto text-[10px] opacity-[33%]">Ticket for:</p>
          <h3 className="font-roboto text-xs">{ticketCount}</h3>
        </span>
      </div>

      <div className="p-2 space-y-1">
        <p className="font-roboto text-xs opacity-[33%]">Special request</p>
        <p className="font-roboto text-[10px]">
          Nil ? Or the users sad story they write in there gets this whole
          space, Max of three rows
        </p>
      </div>
    </div>
  );
}

export default TicketDetails;
