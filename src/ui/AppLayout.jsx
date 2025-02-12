import Progress from "../components/Progress";
import { SelectTicketProvider } from "../utils/SelectTicketContext";
import { UserFormProvider } from "../utils/UserFormContext";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";

function AppLayout() {
  const { pathname } = useLocation();
  const aboutPathName = pathname === "/about";

  return (
    <div className="w-full bg-custom-gradient  text-textGray flex flex-col items-center gap-[46px]">
      <Header />

      <div className="border border-tertiary w-full max-w-[700px] mx-auto p-6 md:p-12 rounded-[40px]  bg-accent">
        {!aboutPathName && <Progress />}

        <div className="rounded-[32px] p-2 md:p-6 border border-tertiary bg-innerBgc flex flex-col gap-8 text-textGray mt-8  w-[604px] max-w-full">
          <UserFormProvider>
            <SelectTicketProvider>
              <Outlet />
            </SelectTicketProvider>
          </UserFormProvider>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
