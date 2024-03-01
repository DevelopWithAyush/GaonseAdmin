import SideBar from "../components/SideBar"

const Customers = () => {
  return (
    <div className="grid grid-cols-4">
    <SideBar/>
    
    <div className="col-span-4 lg:col-span-3 w-full bg-gray-300 p-4">
      <div>Customers</div>
    </div>
  </div>
  )
}

export default Customers 
