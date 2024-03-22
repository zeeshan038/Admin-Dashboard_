import { ReactElement, useCallback, useState } from "react";
import AdminSIdebar from "../components/AdminSIdebar"
import TableHOC from "../components/TableHOC"
import { Link } from "react-router-dom";
import img from '../assets/nike.webp'
import { FaPlus } from "react-icons/fa";
import { Column } from "react-table";
interface DataType {
  photo : ReactElement , 
  name : string ,
  price : number , 
  stock : number ,
  action : ReactElement
}
const columns : Column<DataType>[]=[
  {
    Header : "Photo",
    accessor : "photo"
  },
  {
    Header : "Name",
    accessor : "name"
  },
  {
    Header : "Price",
    accessor : "price"
  },
  {
    Header : "Stock",
    accessor : "stock"
  },
  {
    Header : "Action",
    accessor : "action"
  },
]

const arr:DataType[]=[
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 1113 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  {
    photo : <img src={img} alt="Shoes"/>,
    name : "Puma Shoes Air",
    price : 690 , 
    stock : 3 ,
    action : <Link to="/admin/product/sajknas">Manage</Link>
  },
  
  
];
const Products = () =>  {
const [data] = useState<DataType[]>(arr)
 const Table = useCallback(
 TableHOC<DataType>(columns,data, "dashboard-product-box", "Products" , true),[]
 );
  return (
    <div className="adminContainer">

    <AdminSIdebar/>
    <main>
    {Table()};
    </main>
    <Link to='/admin/product/new' className="create-new-product-btn">
      <FaPlus/>
    </Link>

  </div>
  )
  }

export default Products;