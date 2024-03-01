import SideBar from "../components/SideBar"

const Transaction = () => {
  return (
    <div className="grid grid-cols-4">
      <SideBar/>
      
      <div className="col-span-4 lg:col-span-3 w-full bg-gray-300 p-4">
        <div>transition</div>
      </div>
    </div>
  )
}

export default Transaction
