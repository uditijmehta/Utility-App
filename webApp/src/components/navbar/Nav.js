import React, { useState } from "react";
// Router

import { useDispatch, useSelector } from "react-redux";
// Styles and Animations

const Nav = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  const authLinks = (
    <>
      <li className="nav-text">
        <Link to="/home">
          <AiIcons.AiFillHome />
          <span className="nav-span"> Home</span>
        </Link>
      </li>
      <li className="nav-text">
        <Link to="/todo">
          <RiIcons.RiCalendarTodoLine />
          <span className="nav-span"> Todo List</span>
        </Link>
      </li>
      <li className="nav-text">
        <Link to="/expense">
          <FaIcons.FaMoneyCheckAlt />
          <span className="nav-span">Expense Tracker</span>
        </Link>
      </li>
      <li className="nav-text">
        <Link to="/fitness">
          <IoIcons.IoFitnessOutline />
          <span className="nav-span">Fitness Zone</span>
        </Link>
      </li>

      <li className="nav-text">
        <Link onClick={logoutHandler} to="/">
          <AiIcons.AiOutlineLogout />
          <span className="nav-span">Logout</span>
        </Link>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="nav-text">
        <Link to="/register">
          <AiIcons.AiOutlineLogin />
          <span className="nav-span">Register</span>
        </Link>
      </li>
      <li className="nav-text">
        <Link to="/login">
          <AiIcons.AiOutlineLogin />
          <span className="nav-span">Login</span>
        </Link>
      </li>
    </>
  );
  const [sidebar, setSidebar] = useState(false);

  // Functions
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Navbar>
          <Link to="#" className="menu-bars main">
            <BiIcons.BiMenuAltLeft onClick={showSidebar} />
          </Link>
        </Navbar>
        <NavMenu className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul onClick={showSidebar} className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
          </ul>
        </NavMenu>
      </IconContext.Provider>
    </>
  );
};

export default Nav;
