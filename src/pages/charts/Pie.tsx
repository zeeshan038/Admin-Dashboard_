import AdminSIdebar from "../../components/AdminSIdebar";
import { DoughnutChart, PieChart } from "../../components/Chart";
import { categories } from '../../assets/data.json';

const Pie = () => {
    return (
        <div className="adminContainer">
            <AdminSIdebar />
            <main className="chart-container">
                <h1>Pie & Doughnut Charts</h1>
                <section>
                    <div>
                        <PieChart
                            labels={["Processing", "Shipped", "Delivered"]}
                            data={[12, 9, 13]}
                            backgroundColor={[
                                "hsl(110, 80%, 80%)",
                                "hsl(110, 80%, 50%)",
                                "hsl(110, 40%, 50%)"
                            ]}
                            offset={[0, 0, 50]}
                        />
                    </div>
                    <h2>Order Fulfillment Ratio</h2>
                </section>

                <section>
                    <div>
                        <DoughnutChart
                            labels={categories.map((i) => i.heading)}
                            data={categories.map((i) => i.value)}
                            backgroundColor={categories.map((i) => `hsl(${i.value * 4}, ${i.value}%, 50%)`)}
                            legends={false}
                            offset={[0, 0, 50]}
                        />
                    </div>
                    <h2>Product Categories ratio</h2>
                </section>

                {/* Add other sections as needed */}
            </main>
        </div>
    );
};

export default Pie;
