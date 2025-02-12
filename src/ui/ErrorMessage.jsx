const ErrorMessage = ({ message }) => {
    if (!message) return null;
  
    return (
      <p className="text-sm text-red-500 italic mt-1 font-medium" role="alert">
        {message}
      </p>
    );
  };
  
  export default ErrorMessage;
  