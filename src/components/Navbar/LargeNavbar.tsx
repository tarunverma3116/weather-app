import * as React from "react";
import { FiBell } from "react-icons/fi";
import { DivProps } from "react-html-props";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/sunny.png";
import SearchBox from "./SearchBox";
interface INavbarProps extends DivProps {}

const LargeNavbar: React.FunctionComponent<INavbarProps> = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  return (
    <div className="flex flex-shrink-0 h-16 pl-5 pr-8 bg-black fixed inset-x-0 top-0 items-stretch z-50">
      <div className="w-64 flex items-center">
        <Link to="/home">
          <img className="w-[30px] lg:w-[40px] h-auto" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-2 pl-4"></div>
      <div className="flex items-center justify-end flex-grow gap-6">
        <SearchBox />
        <button onClick={() => handleLogout()}>
          <FiBell className="text-primary h-5 w-auto" />
        </button>
      </div>
    </div>
  );
};

export default LargeNavbar;
