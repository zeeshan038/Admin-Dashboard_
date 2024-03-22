import { FaRegBell } from "react-icons/fa"
import AdminSIdebar from "../components/AdminSIdebar"
import { BsSearch } from 'react-icons/bs'
import user from '../assets/user.jpeg'
import { HiTrendingUp, HiTrendingDown , HiMenuAlt4 } from 'react-icons/hi'
import data from '../assets/data.json'
import { BarChart, DoughnutChart } from "../components/Chart"
import {BiMaleFemale} from 'react-icons/bi'
import Table from '../components/DashboardTable'
const Dashboard = () => {

  return (
    <div className="adminContainer">
      <AdminSIdebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="search for data, user, docs" />
          <FaRegBell />
          <img src={user} alt="user" />
          
        </div>
        <section className="widgetcontainer">
          <WidgetItem percent={10} amount={true} value={300000} heading="Revenue" color="rgb(0, 115, 255)" />
          <WidgetItem percent={-2}  value={30000} heading="Users" color="rgb(0, 198, 202)" />
          <WidgetItem percent={40}  value={3000000} heading="Transactions" color="rgb(255 , 196 , 0)" />
          <WidgetItem percent={40}  value={1000} heading="Products" color="rgb(76 , 0 , 255)" />
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
              <h2>Revenue & Tranactions</h2>
              <BarChart 
              data_1={[200 , 444 , 343 , 556 , 778 , 455 , 990]}
              data_2={[300 , 544 , 743 , 756 , 578 , 955 , 690]}
              title_1="Revenue"
              title_2="Transactions"
              bgColor_1="rgb(0, 115 , 255)"
              bgColor_2="rbg(53 , 162 , 235, 0.8)"/>
          </div>
          <div className="dashboard-catagories">
          <h2>Inventory</h2>
          <div>
            {
              data.categories.map((i)=>{
                return  <CategoryItem
                key={i.heading}
                heading={i.heading}
                value={i.value}
                color={`hsl(${i.value} , ${i.value*10}% ,50%)`}/>

              })
            }
          </div>
          </div>
        </section>

        <section className="transaction-container">
          <div className="gender-chart">

            <h2>Gender Ratio</h2>

            {/* Chart  */}
            <DoughnutChart 
                labels={["Female" , "Male"]}
                data = {[12 ,14]}
                backgroundColor={["hsl(340 , 82% , 56%)" , "rgba(53 , 162 , 235 , 0.8)"]}
                cutout={78} />
            <p>
              <BiMaleFemale/>
            </p>
          </div>
          <Table data={data.transactions}/>
        </section>

      </main>
    </div>
  )
}

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({ heading, value, percent, color, amount=false }: WidgetItemProps) => {
  return (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `${value}` : value}</h4>
        {
          percent > 0 ? (
            <span className="green">
              <HiTrendingUp /> +{percent}%{" "}
            </span>
          ) : (
            <span className="red">
              <HiTrendingDown /> {percent}%{" "}
            </span>
          )
        }
      </div>
      <div className="widgetcircle" style={{
  background: `conic-gradient(${color} ${Math.abs(percent) / 100 * 360}deg, rgb(255, 255, 255) 0deg)`,
}}>
  <span style={{ color: color }}>
    {percent}%
  </span>
</div>

    </article>
  );
}

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

 
export default Dashboard;
