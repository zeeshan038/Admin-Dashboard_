import { ReactElement, useCallback, useState } from "react";
import AdminSIdebar from "../components/AdminSIdebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import user2 from '../assets/user.jpeg'
import { FaTrash } from "react-icons/fa";
interface DataType {
  avatar : ReactElement , 
  name : string ,
   email : string , 
  gender : string,
  role : string
  action : ReactElement
}
const columns : Column<DataType>[]=[
  {
    Header : "Avatar",
    accessor : "avatar"
  },
  {
    Header : "Name",
    accessor : "name"
  },
  {
    Header : "Email",
    accessor : "email"
  },
  {
    Header : "Gender",
    accessor : "gender"
  },
  {
    Header : "Role",
    accessor : "role"
  },
  {
    Header : "Action",
    accessor : "action"
  }
];
const arr : DataType[] = [
  {
    avatar : (
      <img src={user2} alt="user" />
    ),
    name : "Zeeshan",
    email : "khan@gmail.com" , 
    gender : "Male",
    role : "user",
    action : (
      <button>
      <FaTrash/>
    </button>
    )
  },

];
const Customer = () => {
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

export default Customer