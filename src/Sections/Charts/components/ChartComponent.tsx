import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const data = [
  { name: "XS", "Product 1": 50, "Product 2": 0, "Product 3": 0 },
  { name: "S", "Product 1": 0, "Product 2": 100, "Product 3": 0 },
  { name: "M", "Product 1": 0, "Product 2": 0, "Product 3": 175 },
];

const ChartComponent: React.FC = () => (
  <div
    style={{
      backgroundColor: "#212121",
      padding: "20px",
      borderRadius: "8px",
      color: "#fff",
    }}
  >
    <h2 className="poppins-medium text-xl">Net Profit</h2>
    <p className="text-[#BDBDBD] text-sm poppins-regular">2024</p>
    <div className="border-b-2 border-[#4F4D4D] mt-6 mb-4" />
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#666" />
        <XAxis dataKey="name" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Product 1" legendType="circle" fill="#7D4283" />
        <Bar dataKey="Product 2" legendType="circle" fill="#F3722C" />
        <Bar dataKey="Product 3" legendType="circle" fill="#F8961E" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ChartComponent;
