import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Event from "./pages/Event";
import Ticket from "./pages/Ticket";
import About from "./pages/About";
import Form from "./pages/Form";
import NotFound from "./ui/NotFound";
import ErrorPage from "./ui/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Event />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/ticket",
        element: <Ticket />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/form",
        element: <Form />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
