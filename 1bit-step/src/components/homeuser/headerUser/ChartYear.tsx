import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useUser } from "../../../contexts/UserProvider";
import { useMemo } from "react";
export default function ChartYear() {

  const { statsYear } = useUser()

  // TODO: "2024"  to statsYear[dynamicYear]
  const { "2024": choosedYear } = statsYear

  const newData = useMemo(() => {
    const newArr = [];
    for (const [key, value] of Object.entries(choosedYear)) {
      let newObj = { name: key, exp: value };
      newArr.push(newObj);
    }
    return newArr;
  }, [statsYear]);


  return (
    <ResponsiveContainer width="90%" height="100%">
      <AreaChart data={newData}>
        <defs>
          <linearGradient id="colorexp" x1="0" y1="0" x2="0" y2="1">
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
        <Tooltip
          separator=":"
          itemStyle={{
            fontSize: "14px",
            fontFamily: "monospace",
          }}
          labelStyle={{
            fontSize: "12px",
            textTransform: "uppercase",
            fontFamily: "monospace",
            color: "var(--color-secondary-foreground)",
            fontWeight: 500,
          }}
          contentStyle={{
            background: "rgba(255,255,255,0.25)",
            backdropFilter: "blur(1rem)",
            borderRadius: "6px",
          }}
          wrapperStyle={{
            border: "1px solid background",
            borderRadius: "6px",
          }}
        />
        <Area
          type="monotone"
          dataKey="exp"
          stroke="var(--foreground)"
          fillOpacity={1}
          fill="url(#colorexp)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
