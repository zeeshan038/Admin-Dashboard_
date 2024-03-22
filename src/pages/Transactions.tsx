import { ReactElement, useCallback, useState } from "react";
import AdminSIdebar from "../components/AdminSIdebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType { 
  user : string ,
   amount: number , 
  discount : number ,
  quantity: number ,
  status  : ReactElement ,
  action : ReactElement
}
const columns : Column<DataType>[]=[
  {
    Header : "User",
    accessor : "user"
  },
  {
    Header : "Amount",
    accessor : "amount"
  },
  {
    Header : "Discount",
    accessor : "discount"
  },
  {
    Header : "Quantity",
    accessor : "quantity"
  },
  {
    Header : "Status",
    accessor : "status"
  },
  {
    Header : "Action",
    accessor : "action"
  }
];

const arr : DataType[]=[
  {
    user : "zeeshan" , 
    amount : 4500 , 
    discount : 3 , 
    status : <span className="red">Processing</span>,
    quantity : 33,
    action : <Link to="/admin/transaction/sajknas">Manage</Link>
    },
    {
      user : "zeeshan" , 
      amount : 4500 , 
      discount : 3 , 
      status : <span className="green">Shipped</span>,
      quantity : 33,
      action : <Link to="/admin/transaction/sdsds">Manage</Link>
      },
      {
        user : "zeeshan" , 
        amount : 4500 , 
        discount : 3 , 
        status : <span className="purple">Delivered </span>,
        quantity : 33,
        action : <Link to="/admin/transaction/sdsds">Manage</Link>
        }
];
const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(columns,data, "dashboard-product-box", "Customers" , true),[]);
  return (
    <div className="adminContainer">

    <AdminSIdebar/>

    <main>
     {Table()};
    </main>

  </div>
  )
}

export default Transaction