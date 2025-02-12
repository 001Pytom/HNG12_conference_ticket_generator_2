import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const userFormContext = createContext({});

export const UserFormProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [imageUrl, setImageUrl] = useState("");
  const [ticket, setTicket] = useState(null);
  const [imageError, setImageError] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("conferenceForm");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((key) => setValue(key, parsedData[key]));
    }
  }, [setValue]);

  

  return (
    <userFormContext.Provider
      value={{
        register,
        handleSubmit,
        setValue,
        errors,
        imageUrl,
        setImageUrl,
        ticket,
        setTicket,
        imageError,
        setImageError,
      }}
    >
      {children}
    </userFormContext.Provider>
  );
};

export const useUserForm = () => useContext(userFormContext);
