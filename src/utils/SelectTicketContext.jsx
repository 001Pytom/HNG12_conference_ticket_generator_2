import { createContext, useContext, useState } from "react";

const selectTicketContext = createContext({});

export const SelectTicketProvider = ({ children }) => {
  const [selectedTicket, setSelectedTicket] = useState("Regular Access");
  const [ticketCount, setTicketCount] = useState(1);

  const handleTicketClick = (type) => {
    setSelectedTicket((prev) => (prev === type ? null : type));
    setTicketCount(1);
  };

  return (
    <selectTicketContext.Provider
      value={{
        selectedTicket,
        setSelectedTicket,
        ticketCount,
        setTicketCount,
        handleTicketClick,
      }}
    >
      {children}
    </selectTicketContext.Provider>
  );
};

export const useSelectTicket = () => useContext(selectTicketContext);
