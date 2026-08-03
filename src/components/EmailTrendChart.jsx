import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function EmailTrendChart() {

  const data = [
    { day: "Mon", emails: 4 },
    { day: "Tue", emails: 7 },
    { day: "Wed", emails: 5 },
    { day: "Thu", emails: 9 },
    { day: "Fri", emails: 8 },
    { day: "Sat", emails: 6 },
    { day: "Sun", emails: 11 },
  ];

  return (
    <div className="stats-card">

      <h4 style={{ marginBottom: 20 }}>
        Weekly Analysis
      </h4>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="emails"
            stroke="#8B5CF6"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default EmailTrendChart;