
import { BrowserRouter , Routes , Route } from "react-router-dom"
 import {lazy , Suspense} from "react"
const Dashboard = lazy(()=>import ("./pages/Dashboard")) ;
const Customer  = lazy( ()=> import("./pages/Customer")) ;
const Transaction = lazy(()=>import("./pages/Transactions"))
const Products = lazy(()=>import("./pages/Products") ) ;
const BarChart = lazy(()=>import("./pages/charts/BarChart") ) ;
const Pie = lazy(()=>import("./pages/charts/Pie") ) ;
const Line= lazy(()=>import("./pages/charts/Line") ) ;
const VisitDashboard= lazy(()=>import("./pages/VisitDashboard") ) ;
import Loader from "./components/Loader";

const Stopwatch = lazy(()=>import("./pages/apps/Stopwatch"));
const Coupon= lazy(()=>import("./pages/apps/Coupon"));


const NewProduct=lazy(()=>import("./pages/managment/NewProduct"));
const ProductManagment =lazy(()=>import("./pages/managment/ProductManagment"));
const TransactionManagment  =lazy(()=>import("./pages/managment/TransactionManagment"));
function App() {
  

  return (
    <div>
      <BrowserRouter>
       <Suspense fallback={<Loader/>}>
      <Routes>
      <Route path={'/'} element = {<VisitDashboard/>}/>
        <Route path={'/admin/dashboard'} element = {<Dashboard/>}/>
        <Route path={'/admin/product'} element = {<Products/>}/>
        <Route path={'/admin/customer'} element = {<Customer/>}/>
        <Route path={'/admin/transaction'} element = {<Transaction/>}/>
         
       <Route path={'/admin/chart/bar'} element={<BarChart/>}/>
       <Route path={'/admin/chart/pie'} element={<Pie/>}/>
       <Route path={'/admin/chart/line'} element={<Line/>}/>
       
             
       <Route path={'/admin/app/stopwatch'} element={<Stopwatch/>}/>
       <Route path={'/admin/app/coupon'} element={<Coupon/>}/>


        <Route path="/admin/product/new" element={<NewProduct/>}/>
        <Route path="/admin/product/:id" element={<ProductManagment/>}/>
        <Route path="/admin/transaction/:id" element={<TransactionManagment/>}/>


      </Routes>
 
      </Suspense>
      
      
      </BrowserRouter>
    </div>
  )
}

export default App
