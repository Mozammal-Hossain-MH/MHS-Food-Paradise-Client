import { FaMoneyCheckAlt, FaTruck, FaUsers } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import useAuthContext from "../../../Hooks/useAuthContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {

    const { user, loading } = useAuthContext();
    const axiosSecure = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })

    const { data: chartStats = [] } = useQuery({
        queryKey: ['order-stats'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data
        }
    })
    console.log(chartStats, stats);

    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // ?custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChart = chartStats.map(data => {
        return { name: data.category, value: data.revenue }
    })
    console.log(pieChart)

    return (
        <div className="bg-[#F6F6F6]">
            <div className="m-12">
                <h2 className="text-3xl font-cinzel font-semibold">Hi, Welcome {user?.displayName ? user?.displayName : 'Back'}!</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6 text-white">
                    <div className="flex justify-center items-center py-8 rounded bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                        <FaMoneyCheckAlt className="w-10 h-10 mr-3" />
                        <div>
                            <p className="text-4xl font-extrabold">${stats?.revenue.toFixed(2)}</p>
                            <p className="text-2xl">Revenue</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-8 rounded bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                        <FaUsers className="w-10 h-10 mr-3" />
                        <div>
                            <p className="text-4xl font-extrabold">{stats?.users}</p>
                            <p className="text-2xl">Customers</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-8 rounded bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                        <SiCodechef className="w-10 h-10 mr-3" />
                        <div>
                            <p className="text-4xl font-extrabold">{stats?.products}</p>
                            <p className="text-2xl">Products</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-8 rounded bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                        <FaTruck className="w-10 h-10 mr-3" />
                        <div>
                            <p className="text-4xl font-extrabold">{stats?.orders}</p>
                            <p className="text-2xl">Orders</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:grid grid-cols-2 m-8 py-4 rounded bg-[#fff]">
                <div className="w-full">
                    <ResponsiveContainer className={'flex items-center'} width={'100%'} height={'100%'} aspect={1.8}>
                        <BarChart
                            width={100}
                            height={400}
                            data={chartStats}
                            margin={{
                                top: 20,
                                right: 10,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartStats.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="w-full h-auto mt-20 md:mt-0 flex justify-center items-center">
                    <PieChart width={300} height={350} >
                        <Pie
                            data={pieChart}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={130}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChart.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;