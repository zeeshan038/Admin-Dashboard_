import { useState } from "react"
import AdminSIdebar from "../../components/AdminSIdebar"


const Toss = () => {
  const [angle , setAngle] = useState<number>(0);
  

  const flipCoin = ()=>{
    if(Math.random()>0.5){
      setAngle((prev)=> prev + 100);
    }
    else {
      setAngle((prev)=> prev + 360);
    }
  }
  return (
    <div className="adminContainer">
    <AdminSIdebar /> 
    <main className="dashboard-app-container">
     
    </main>
    </div>
  )
}

export default Toss