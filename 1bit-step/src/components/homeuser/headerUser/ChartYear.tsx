import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
  },
  {
    name: "Feb",
    uv: 3000,
  },
  {
    name: "Mar",
    uv: 2000,
  },
  {
    name: "Apr",
    uv: 2780,
  },
  {
    name: "May",
    uv: 1890,
  },
  {
    name: "Jun",
    uv: 2390,
  },
  {
    name: "Jul",
    uv: 3490,
  },
  {
    name: "Aug",
    uv: 1000,
  },
  {
    name: "Sep",
    uv: 1200,
  },
  {
    name: "Oct",
    uv: 1400,
  },
  {
    name: "Nov",
    uv: 1800,
  },
  {
    name: "Dec",
    uv: 2000,
  },
];

export default function ChartYear() {
  return (
    <ResponsiveContainer width="90%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--foreground)" stopOpacity={0.8} />
            <stop offset="98%" stopColor="var(--foreground)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          className="text-sm font-thin"
          padding={{ left: 10 }}
          tick={{ stroke: "var(--secondary-foreground)", strokeWidth: 0.1 }}
        />
        <YAxis hide={true} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="var(--foreground)"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
