import { RiDashboardFill, RiShoppingBag3Fill, RiCoupon3Fill } from "react-icons/ri";
import { Location, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ImFileText } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { IconType } from "react-icons";
import { FaChartBar, FaChartPie, FaChartLine, FaStopwatch } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState, useEffect, } from "react";



function AdminSidebar() {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(window.innerWidth < 1100);

const resizeHandler = ()=>{
  setPhoneActive(window.innerWidth < 1100);
};
useEffect(()=>{
  window.addEventListener("resize" , resizeHandler)

  return()=>{
    window.removeEventListener("resize" , resizeHandler);
  }
} , [])

  return (
    <>
      {phoneActive && (
        <button id="hamburgur" onClick={() => setShowModal(true)}>
          <HiMenuAlt1 />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo.</h2>
        <DivOne location={location} />
        <DivTwo location={location} />
        <DivThree location={location} />
        {phoneActive && <button id="close-sidebar" onClick={() => setShowModal(false)}>close</button>}
      </aside>
    </>
  );
}

const DivOne = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Dashboard</h5>
      <ul>
        <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location} />

        <Li url="/admin/product" text="Product" Icon={RiShoppingBag3Fill} location={location} />

        <Li url="/admin/customer" text="Customer" Icon={IoIosPeople} location={location} />

        <Li url="/admin/transaction" text="Transaction" Icon={ImFileText} location={location} />
      </ul>
    </div>
  );
};
const DivTwo = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Charts</h5>
      <ul>
        <Li url="/admin/chart/bar" text="Bar" Icon={FaChartBar} location={location} />

        <Li url="/admin/chart/pie" text="Pie" Icon={FaChartPie} location={location} />

        <Li url="/admin/chart/line" text="Line" Icon={FaChartLine} location={location} />
      </ul>
    </div>
  );
};
const DivThree = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Apps</h5>
      <ul>
        <Li url="/admin/app/stopwatch" text="StopWatch" Icon={FaStopwatch} location={location} />

        <Li url="/admin/app/coupon" text="Coupon" Icon={RiCoupon3Fill} location={location} />
      </ul>
     
    </div>
  );
};
interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, Icon, location }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url) ? "rgba(135, 206, 235, 1)" : "white",
    }}
  >
    <Link to={url} style={{ color: location.pathname.includes(url) ? "rgb(0, 115, 255)" : "black" }}>
      <div className="div">
        <Icon />
        <div className="div2">{text}</div>
      </div>
    </Link>
  </li>
);

export default AdminSidebar;
