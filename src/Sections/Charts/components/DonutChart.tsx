import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  Text,
} from "recharts";

const donutData = [
  { name: "Product 1", value: 50 },
  { name: "Product 2", value: 50 },
];

const COLORS = ["#7D4283", "#F3722C"];

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
          {donutData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" iconType="circle" height={36} />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default DonutChartComponent;
