import { useNavigate } from "react-router-dom";
import SelectBtn from "../components/SelectBtn";
import ticketImg from "../data/images/Ticket/TICKET.png";
import user from "../data/images/Ticket/user.png";
import Image from "../ui/Image";
import barcode from "../data/images/Ticket/Bar code.png";
import TicketDetails from "../components/TicketDetails";
import { useUserForm } from "../utils/UserFormContext";
function Ticket() {
  const navigate = useNavigate();
  const { imageUrl } = useUserForm();
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="text-center space-y-4">
        <h3 className="font-alatsi font-normal text-2xl md:text-3xl">
          Your Ticket is Booked!
        </h3>
        <p className="font-bold font-roboto text-base">
          You can download or Check your email for a copy
        </p>
      </div>

      <div className="w-full md:py-8 md:px-5 flex justify-center ">
        <div className="bg-[url('/src/data/images/Ticket/TICKET.png')] w-full max-w-[300px] flex flex-col justify-between h-full md:min-h-[600px] gap-14 md:gap-0 items-center p-5">
          <div className="w-full h-full flex flex-col items-center  gap-5 p-[14px] border border-primary rounded-2xl ">
            <div className="text-center">
              <h3 className="font-roadrage font-normal text-3xl md:text-4xl ">
                Techember Fest ”25
              </h3>
              <p className="text-[10px] md:text-xs font-roboto">
                📍 04 Rumens road, Ikoyi, Lagos
              </p>
              <p className="text-[10px] md:text-xs font-roboto mt-1">
                📅 March 15, 2025 | 7:00 PM
              </p>
            </div>

            <div>
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="user"
                  className="max-w-32 max-h-32 w-full  border-primary border-4 rounded-xl"
                />
              ) : (
                <Image src={user} alt="user" />
              )}{" "}
            </div>

            <TicketDetails />
          </div>
          <div>
            <Image src={barcode} alt="barcode" />
          </div>
        </div>
      </div>

      <div className="w-full border border-custom md:px-12 rounded-3xl flex flex-col md:flex-row gap-4 md:gap-8  ">
        <SelectBtn
          text="Book Another Ticket"
          className="bg-tertiary  text-primary"
          onClick={() => navigate("/")}
        />
        <SelectBtn
          text="Download Ticket"
          className="text-white bg-primary"
          onClick={() => navigate("/ticket")}
          type="submit"
        />
      </div>
    </div>
  );
}

export default Ticket;
