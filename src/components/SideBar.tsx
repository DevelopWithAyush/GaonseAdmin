import { Link } from "react-router-dom"
import { RxDashboard as DashboardIcon } from "react-icons/rx";
import { FaProductHunt, FaUser } from "react-icons/fa";
import { MdDeliveryDining, MdOutlinePayment } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { GoCodeReview } from "react-icons/go";
import { useState } from "react";

const SideBar = () => {
  const [toggleMenu, setTogglemenu] = useState<boolean>(false)
  return (
    <>
      <div className={`absolute top-0 left-0 w-full h-[100vh]  bg-[#0f172a] bg-opacity-20 border-t-[0px] border-l-[0px] border-r-[0px] border-b-[1px] border-solid border-blue-500 border-opacity-[.2] shadow-none backdrop-blur-[9.9px] lg:hidden ${toggleMenu ? 'absolute' : "hidden"} `} onClick={() => setTogglemenu(false)}></div>
      <div className="flex flex-col gap-2 py-5 px-5 cursor-pointer lg:hidden" onClick={() => setTogglemenu(true)}  >
        <span className="border-solid border-[1.5px] border-orange-500 w-[2rem] border-r-8 transition-all"></span>
        <span className="border-solid border-[1.5px] border-orange-500 w-[2rem] border-r-8 transition-all"></span>
        <span className="border-solid border-[1.5px] border-orange-500 w-[2rem] border-r-8 transition-all"></span>
      </div>
      <aside className={`fixed top-0 h-[100vh] z-10 bg-orange-100  flex flex-col items-center py-5 px-8 overflow-y-auto scrollbar-hidden lg:col-span-1 lg:relative lg:left-[0%] lg:bg-white transition-all duration-300 ${toggleMenu ? 'left-[0%]' : 'left-[-200%]'} `} >
        <div className="flex w-full items-center justify-start gap-3">
          <img src="https://res.cloudinary.com/dpqsatnvt/image/upload/v1707135376/logo_v7z9ah.png" alt="" className="w-[4rem]" />
          <h1 className="text-4xl font-bold text-orange-600" >Gaonse</h1>
        </div>
        <nav className="flex flex-col gap-5 w-full mt-10 items-start px-5 md:text-md lg:text-lg font-semibold text-gray-500">
          <Link to="/" className="flex items-center justify-end gap-3" > <DashboardIcon /> Dashboard</Link>
          <Link to="/product" className="flex items-center justify-end gap-3"><FaProductHunt /> Product</Link>
          <Link to="/users" className="flex items-center justify-end gap-3"><FaUser />users</Link>
          <Link to="/payment" className="flex items-center justify-end gap-3"> <MdOutlinePayment />payment</Link>
          <Link to="/payment" className="flex items-center justify-end gap-3"> <MdDeliveryDining />order</Link>
          <div className="border-b w-80 border-gray-400 mb-2"></div>
          <Link to="/coupon" className="flex items-center justify-end gap-3"> <RiCoupon2Fill />coupon</Link>
          <Link to="/review" className="flex items-center justify-end gap-3"> <GoCodeReview />review</Link>
        </nav>
      </aside>
    </>
  )
}

export default SideBar
