import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
      <p className="notFoundDesc">
        It looks like nothing was found at this location.use this button below
        to go back to the homepage👇
      </p>
      <button
        className=" bg-custom-gradient text-white py-3 px-5 rounded-lg  "
        onClick={() => navigate("/")}
      >
        Take me Back Home 🙂
      </button>
    </div>
  );
}

export default NotFound;
