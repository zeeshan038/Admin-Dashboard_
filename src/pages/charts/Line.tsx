
import AdminSIdebar from "../../components/AdminSIdebar";
import { LineChart } from "../../components/Chart";

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

const Line = () => {
    return (
        <div className="adminContainer"> 
            <AdminSIdebar />
            <main className="chart-container">
             <h1>Line Chart</h1>
             <section>
                <LineChart
                 data = {[200 , 300 , 343 , 556 , 778 ,455 , 999]} 
                 label="Users"
                 borderColor="rgb(53 , 162 , 255)"
                 backgroundColor="rgba(53 , 162 , 255 , 0.5)"
                 labels={months}
                  />
                  <h2>Active Users </h2>
                  </section>

                  <section>
                <LineChart
                label="Products"
                 data = {[40 , 60 , 244 , 100 , 143 , 120 , 41 ,47 , 50 , 56 , 32]} 
                 backgroundColor="hsla(269 , 80% , 40% , 0.4)"
                 borderColor="hsl(269 , 80% , 40%)"
                 labels={months}
                  />
                  <h2>Total Products (SKU) </h2>
                  </section>

                  <section>
                <LineChart
                 data = {[24000 , 14400 , 2410 , 34300 , 90000 , 20000 , 25600 , 44700 , 99000 , 144400 , 100000 , 12000]} 
                 label="Revenue"
                 backgroundColor="hsla(129 , 80% , 40% , 0.4)"
                 borderColor="hsl(129 , 80% , 40% )"
                 labels={months}
                  />
                  <h2>Total Revenue </h2>
                  </section>
                  <section>
                <LineChart
                 data = {[9000 , 12000 , 9000 , 1000 , 5000 , 4000 , 1200 , 1100 , 1500 , 2000 , 5000]} 
                 label="Discount"
                 backgroundColor="hsla(29 , 80% , 40% , 0.4)"
                 borderColor="hsl(29 , 80% , 40% )"
                 labels={months}
                  />
                  <h2>Discount Allotted </h2>
                  </section>
                  </main>
        </div>
    );
};

export default Line;


 
