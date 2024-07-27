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
import ChartComponent from "./components/ChartComponent";
import DonutChartComponent from "./components/DonutChart";

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
