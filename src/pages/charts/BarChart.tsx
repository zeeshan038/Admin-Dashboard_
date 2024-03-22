
import AdminSIdebar from "../../components/AdminSIdebar";
import { BarChart } from "../../components/Chart";

const months = [
  "Januray" , 
  "Februray" , 
  "March" , 
  "April" , 
  "May" , 
  "June" , 
  "July" , 
  "Aug" , 
  "Sept" , 
  "Oct" , 
  "Nov" , 
  "Dec" 
];

const AdminBarChart = () => {
    return (
        <div className="adminContainer"> 
            <AdminSIdebar />
            <main className="chart-container">
             <h1>Bar Chart</h1>
             <section>
                <BarChart
                 data_1 = {[200 , 300 , 343 , 556 , 778 ,455 , 999]} 
                 data_2 = {[300 , 144 , 433 , 655 , 237 , 755 , 190]} 
                 title_1 = "Products" title_2="Users"
                 bgColor_1 = {`hsl(260 , 50% , 30%)`}
                 bgColor_2= {`hsl(360 , 90%  , 90%)`}
                  />
                  </section>
                  <section>
                <BarChart
                horizontal = {true}
                 data_1 = {[200 , 300 , 343 , 556 , 778 ,455 , 999 , 225 , 292, 232 ,252 , 123] } 
                 data_2 = {[]} 
                 title_1 = "Products" title_2="Users"
                 bgColor_1 = {`hsl(180 , 40% , 50%)`}
                 bgColor_2= ""
                 labels={months}
                  />

                  <h2>Order through out the year</h2>
                  </section>

                  </main>
        </div>
    );
};

export default AdminBarChart;
