const data = [
  {
    subject: "Strenght",
    A: 5,
    fullMark: 150,
  },
  {
    subject: "Intelligence",
    A: 5,
    fullMark: 150,
  },
  {
    subject: "Emotional",
    A: 4,
    fullMark: 150,
  },
  {
    subject: "Social",
    A: 2,
    fullMark: 150,
  },
  {
    subject: "Creativity",
    A: 6,
    fullMark: 150,
  },
  {
    subject: "Discipline",
    A: 1,
    fullMark: 150,
  },
];
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Check the polarRadius, if you want to add it, make the max value dynamic based on the currents one
export default function ChartExperience() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius="60%" cx="50%" cy="50%" data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          className="hidden text-xs font-extralight md:block"
        />
        {/*        <PolarRadiusAxis domain={[0, 20]} /> */}
        <Tooltip />
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
