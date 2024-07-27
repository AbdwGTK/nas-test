import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Text,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "XS", "Product 1": 50, "Product 2": 0, "Product 3": 0 },
  { name: "S", "Product 1": 0, "Product 2": 100, "Product 3": 0 },
  { name: "M", "Product 1": 0, "Product 2": 0, "Product 3": 175 },
];
const ChartsSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-2 md:px-20 my-24">
      <div className="w-full">
        <p className="poppins-medium text-2xl text-white text-center md:text-start">
          Our Charts
        </p>
        <div className="flex flex-col md:flex-row md:justify-between mt-4 md:mt-6 gap-6">
          <div className="w-full md:w-2/3">
            <ChartComponent />
          </div>
          <div className="w-full md:w-1/3">
            <DonutChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChartsSection;

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
        <Bar dataKey="Product 1" legendType="circle" fill="#a855f7" />
        <Bar dataKey="Product 2" legendType="circle" fill="#fb923c" />
        <Bar dataKey="Product 3" legendType="circle" fill="#facc15" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const donutData = [
  { name: "Product 1", value: 50 },
  { name: "Product 2", value: 50 },
];

const COLORS = ["#a855f7", "#fb923c"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <Text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </Text>
  );
};

const DonutChartComponent: React.FC = () => (
  <div
    style={{
      backgroundColor: "#212121",
      padding: "20px",
      borderRadius: "8px",
      color: "#fff",
    }}
  >
    <h2 className="poppins-medium text-xl text-white">Primary Text</h2>
    <p className="poppins-medium text-xl text-white">5.987,34</p>
    <p className="text-[#BDBDBD] text-sm poppins-regular">Secondary text</p>
    <div className="border-b-2 border-[#4F4D4D] mt-2" />

    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={donutData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          stroke="none"
          paddingAngle={5}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  </div>
);
