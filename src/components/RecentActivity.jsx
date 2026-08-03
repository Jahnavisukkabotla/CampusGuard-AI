import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaBug,
} from "react-icons/fa";

function RecentActivity() {
  const activities = [
    {
      icon: <FaCheckCircle />,
      color: "#22C55E",
      title: "support@google.com",
      status: "SAFE",
    },
    {
      icon: <FaBug />,
      color: "#EC4899",
      title: "verify-bank@xyz.com",
      status: "PHISHING",
    },
    {
      icon: <FaExclamationTriangle />,
      color: "#F59E0B",
      title: "rewards@offers.com",
      status: "SUSPICIOUS",
    },
  ];

  return (
    <div className="stats-card">
      <h4 style={{ marginBottom: "20px" }}>
        Recent Activity
      </h4>

      {activities.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 0",
            borderBottom:
              index !== activities.length - 1
                ? "1px solid #eee"
                : "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div
              style={{
                width: 45,
                height: 45,
                borderRadius: 12,
                background: item.color,
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.icon}
            </div>

            <div>
              <strong>{item.title}</strong>
              <br />
              <small>{item.status}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;