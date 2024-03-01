import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"
import SideBar from "../components/SideBar"
import VerticalChart from "../components/VerticalChart"



const Dashboard = () => {
  return (
    <div className="grid grid-cols-4">
      <SideBar />

      <main className="col-span-4 lg:col-span-3 bg-gray-200 w-full p-4 ">
        <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-6">
          <WidgetItem heading="revenue" value={45} color="#00d09c" percent={55} amount />
          <WidgetItem heading="profit" value={45} color="#00d09c" percent={-45} />
          <WidgetItem heading="transition" value={45} color="#00d09c" percent={65} />
          <WidgetItem heading="product" value={45} color="#00d09c" percent={75} />
        </section>
        <section className="grid grid-cols-1  mt-5 2xl:grid-cols-4 gap-6 ">
          <div className="col-span-1 2xl:col-span-3 flex flex-col items-center justify-center bg-white rounded-lg p-10">
            <p className="text-3xl font-semibold opacity-[.8] mb-5 " >revenue and transition</p>
            <VerticalChart data_1={[300, 144, 433, 655, 237, 755, 190]}
              data_2={[200, 444, 343, 556, 778, 455, 90]}
              tittle_1="Revenue"
              tittle_2="Transaction"
              bgColor1="rgb(111,115,255)"
              bgColor2="rgba(111,115,255,0.4)" />
          </div>
          <div className="col-span-1 2xl:col-span-1 flex flex-col items-center justify-center bg-white rounded-lg gap-5 p-10">
            <h5 className="text-3xl font-semibold opacity-[.8] mb-5 ">category</h5>
            <CatWedget heading="ayush" value={45} color="red" ></CatWedget>
            <CatWedget heading="ayush" value={45} color="red" ></CatWedget>
            <CatWedget heading="ayush" value={45} color="red" ></CatWedget>
            <CatWedget heading="ayush" value={45} color="red" ></CatWedget>
            <CatWedget heading="ayush" value={45} color="red" ></CatWedget>
            <CatWedget heading="ayush" value={45} color="red" ></CatWedget>
            <CatWedget heading="ayush" value={45} color="red" ></CatWedget>
            <CatWedget heading="ayush" value={45} color="red" ></CatWedget>
          </div>
        </section>

      </main>
    </div>
  )
}

interface WidgetItemProps {
  heading: string,
  value: number,
  percent: number,
  color: string
  amount?: boolean
}

const WidgetItem = ({ heading, value, percent, color, amount }: WidgetItemProps) => <article className=" col-span-1  flex justify-between bg-white shadow-sm p-[2rem] rounded-lg  ">
  <div>
    <p className=" opacity-[.8] text-[1rem] ">{heading}</p>
    <h4 className=" text-[1.5rem] font-bold ">{amount ? `$${value}` : value}</h4>
    {
      percent > 0 ? <span className={`flex items-center gap-2 text-green-600 font-semibold`}><HiTrendingUp />+{percent}%</span> : <span className={`flex items-center gap-2 text-red-600 font-semibold`}><HiTrendingDown />  {percent}% </span>
    }
  </div>
  <div className='widgetPie' style={{
    background: `conic-gradient(
    ${color} ${percent / 100 * 360}deg,
    rgb(225,225,225) 0
  )`
  }}>
    <span className={`relative font-semibold `} style={{ color: `${color}` }} >{percent}%</span>
  </div>

</article>

type CatWedgetProps = Pick<WidgetItemProps, 'heading' | 'value' | 'color'>

const CatWedget = ({ heading, value, color }: CatWedgetProps) => <article className="w-full flex items-center justify-between">

  <p>{heading}</p>
  <div className="w-[7rem] bg-gray-300 h-[7px] rounded-lg  overflow-hidden">
    <div className={`h-full`} style={{ backgroundColor: `${color}`, width: `${value}%` }}></div>
  </div>
  <p>{value}</p>
</article>

export default Dashboard
