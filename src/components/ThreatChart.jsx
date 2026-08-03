import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ThreatChart({ stats }) {

  const data = [
    {
      name: "Safe",
      value: stats.safeEmails,
    },
    {
      name: "Suspicious",
      value: stats.suspiciousEmails,
    },
    {
      name: "Phishing",
      value: stats.phishingEmails,
    },
  ];

  const COLORS = [
    "#22C55E",
    "#F59E0B",
    "#EC4899",
  ];

  return (
    <div className="stats-card">

      <h4 style={{ marginBottom: "20px" }}>
        Threat Distribution
      </h4>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>

          <Pie
            data={data}
            innerRadius={70}
            outerRadius={110}
            dataKey="value"
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ThreatChart;