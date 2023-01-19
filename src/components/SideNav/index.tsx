import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import NavbarLink from "../Navbar/NavbarLink";
import { useLocation } from "react-router-dom";
import { RiBubbleChartLine } from "react-icons/ri";
import { BiChart } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

interface ISideNavProps {}

const SideNav: React.FunctionComponent<ISideNavProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { pathname } = useLocation();

  const mainNavSettings = [
    {
      label: "Home",
      link: "/home",
      icon: <RiBubbleChartLine />,
      active: pathname === "/home",
    },
    {
      label: "Launchpad",
      link: "/forecast",
      icon: <BiChart />,
      active: pathname === "/forecast" || pathname === "/forecast",
    },
    // {
    //   label: "XTrade",
    //   link: "/location",
    //   icon: <SlLocationPin />,
    //   active: pathname === "/location",
    // },
  ];

  const secNavSettings = [
    {
      label: "Settings",
      link: "/settings",
      icon: <IoSettingsOutline />,
      active: pathname === "/settings",
    },
    {
      label: "Logout",
      link: "/help",
      icon: <MdOutlineLogout />,
      active: pathname === "/help",
    },
  ];

  return (
    <div
      className={twMerge(
        "overflow-hidden  transition-all border-t-5  border-indigo-400 rounded",
        isCollapsed ? "w-18" : "w-60"
      )}
    >
      <div
        className={twMerge(
          "w-60  flex flex-col text-white absolute inset-y-0 left-0 rounded",
          isCollapsed ? "w-18" : "w-60"
        )}
      >
        <nav className="flex-col flex px-2 pt-14 mt-12">
          <ul className="flex flex-col gap-2">
            {mainNavSettings.map((navItem, key) => (
              <SideNavListItem
                label={isCollapsed ? "" : navItem.label}
                active={navItem.active}
                icon={navItem.icon}
                link={navItem.link}
                key={key}
              />
            ))}
          </ul>
        </nav>
        <ul className="flex flex-col gap-2 mt-auto ">
          {secNavSettings.map((navItem, key) => (
            <SideNavListItem
              label={isCollapsed ? "" : navItem.label}
              active={navItem.active}
              icon={navItem.icon}
              link={navItem.link}
              key={key}
            />
          ))}
        </ul>
        {/* <button
          className="p-4 text-black"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <MdOutlineDoubleArrow /> : "Close"}
        </button> */}
      </div>
    </div>
  );
};

interface ISideNavListItemProps {
  label: React.ReactNode;
  icon: React.ReactElement;
  active?: boolean;
  link: string;
}

const SideNavListItem: React.FunctionComponent<ISideNavListItemProps> = ({
  label,
  icon,
  active,
  link,
}) => {
  return (
    <NavbarLink
      to={link}
      isActive={window.location && window.location.pathname === "/marketplace"}
    >
      <li
        className={twMerge(
          " flex px-3 gap-2 py-2 items-center text-[#6c6c83]",
          active && "bg-[#f67f2a] rounded-xl py-3 text-white font-bold"
        )}
      >
        {React.cloneElement(icon, {
          className: twMerge("w-5 h-auto", icon.props.className),
        })}
        {label}
      </li>
    </NavbarLink>
  );
};

export default SideNav;
