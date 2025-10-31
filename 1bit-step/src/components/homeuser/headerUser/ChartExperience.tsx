import { useMemo } from "react";
import { useUser } from "../../../contexts/UserProvider";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function ChartExperience() {
  const { user } = useUser();
  const userStats = user.stats;

  const newData = useMemo(() => {
    const newArr = [];
    for (const [key, value] of Object.entries(userStats)) {
      let newObj = { subject: key, A: value, fullMark: 150 };
      newArr.push(newObj);
    }

    return newArr;
  }, [userStats]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius="60%" cx="50%" cy="50%" data={newData}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          className="hidden text-xs font-extralight md:block"
        />
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
        <Radar
          name="Status"
          dataKey="A"
          fill="#000"
          stroke="#000"
          fillOpacity={0.4}
          strokeOpacity={0.8}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
