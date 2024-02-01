import Button from "../UI/Button.tsx";
import { NavLink } from "react-router-dom";
import UpcomingSessions from "../Sessions/UpcomingSessions.tsx";
import { useState } from "react";

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function openUpcommingSessions() {
    setIsModalOpen(true);
  }

  function closeUpcommingSessions() {
    setIsModalOpen(false);
  }

  return (
    <>
      <header id="main-header">
        <h1>ReactSessions</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Our Mission</NavLink>
            </li>
            <li>
              <NavLink to="/sessions">Browse Sessions</NavLink>
            </li>
            <li>
              <Button onClick={openUpcommingSessions}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
      {isModalOpen ? (
        <UpcomingSessions onDone={closeUpcommingSessions} />
      ) : null}
    </>
  );
}
