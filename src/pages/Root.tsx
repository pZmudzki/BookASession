import { Outlet } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import SessionsContextProvider from "../store/sessions-context.tsx";

export default function Root() {
  return (
    <SessionsContextProvider>
      <NavBar />
      <Outlet />
    </SessionsContextProvider>
  );
}
