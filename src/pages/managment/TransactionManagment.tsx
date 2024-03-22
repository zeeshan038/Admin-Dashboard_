import { useState } from "react";
import AdminSIdebar from "../../components/AdminSIdebar";
import { OrderItemType, OrderType } from "../../types";

import img from '../red nike.jpeg';
import { Link } from "react-router-dom";

const orderItems: OrderItemType[] = [
    {
        name: "Nike Shoes",
        photo: img,
        _id: "asassasa",
        quantity: 4,
        price: 2000,
    }
];

const TransactionManagment = () => {
    const [order, setOrder] = useState<OrderType>({
        name: "zeeshsan",
        address: "77 black street",
        city: "swabi",
        state: "Nevada",
        country: "pakistan",
        pinCode: 2434343,
        status: "Processing",
        subtotal: 4000,
        discount: 1200,
        shippingCharges: 190,
        tax: 12,
        total: 4000 + 200 + 100 - 1200,
        orderItem: orderItems,
        _id: "asasasasas",
    });

    const { name, address, city, country, state, pinCode, subtotal, shippingCharges, tax, discount, total, status } = order;

    const updateHandler = () => {
        setOrder((prev) => ({
            ...prev,
            status: prev.status === "Processing" ? "Delivered" : "Shipped",
        }));
    };

    return (
        <div className="adminContainer">
            <AdminSIdebar />
            <main className="product-managment">
                <section style={{
                    padding: "4rem"
                }}>
                    <h2>Order Items</h2>
                    {
                        order.orderItem.map(i => (
                            <ProductCard key={i._id} name={i.name} photo={i.photo} _id={i._id} quantity={i.quantity} price={i.price} />
                        ))
                    }
                </section>
                <article className="shipping-info-card">
                    <h1>Order Info</h1>
                    <h5>User info</h5>
                    <p>Name : {name}</p>
                    <p>
                        Address : {`${address} , ${city} , ${state} , ${country} , ${pinCode}`}
                    </p>

                    <h5>Amount Info</h5>
                    <p>Subtotal : {subtotal}</p>
                    <p>Shipping Charges : {shippingCharges}</p>
                    <p>tax : {tax}</p>
                    <p>Discount : {discount}</p>
                    <p>Total : {total}</p>
                    <h5>
                        Status Info
                        <p>
                            Status :
                            <span className={status === 'Delivered' ? "purple" : status === "Shipped" ? "green" : "red"}>
                                {status}
                            </span>
                        </p>
                    </h5>
                    <button onClick={updateHandler}>Process Status</button>
                </article>
            </main>
        </div>
    );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
    <div className="transaction-product-card">
        <img src={photo} alt={name} />
        <Link to={`/product/${_id}`}>{name}</Link>
        <span>${price} X {quantity} = ${price * quantity}</span>
    </div>
);

export default TransactionManagment;
