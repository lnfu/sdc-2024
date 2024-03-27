import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-18 px-4  text-gray-dark border-b-2 border-gray-dark">
      <img className="my-1 w-14 h-12" src={logo} alt=""></img>
      <h1 className="w-full text-5xl font-bold text-[#EE7214]">BILLOOK</h1>
      <ul className="flex whitespace-nowrap item-center">
        <li className="mx-4">
          <Link to="/">HOME</Link>
        </li>
        <li className="mx-4">
          <Link to="/mybook">MY BOOK</Link>
        </li>
        <li className="mx-4">
          <Link to="/joinbook">JOIN BOOK</Link>
        </li>
        <li className="mx-4">
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
