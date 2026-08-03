import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import "../styles/history.css";

import {
  FaEnvelope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaBug,
} from "react-icons/fa";

function History() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await api.get("/emails");
      setEmails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getIcon = (status) => {
    if (status === "SAFE")
      return <FaCheckCircle color="#22C55E" />;

    if (status === "SUSPICIOUS")
      return <FaExclamationTriangle color="#F59E0B" />;

    return <FaBug color="#EC4899" />;
  };

  const getBadge = (status) => {
    if (status === "SAFE") return "badge-safe";
    if (status === "SUSPICIOUS") return "badge-warning";
    return "badge-danger";
  };

  return (
    <>
      <Navbar />

      <div className="page-container">
        <div className="container py-5">

          <h1 className="dashboard-title">
            Email Analysis History
          </h1>

          <p className="dashboard-subtitle">
            Review all analyzed emails and their threat status.
          </p>

          {emails.length === 0 ? (
            <div className="stats-card text-center">
              <h4>No emails analyzed yet.</h4>
            </div>
          ) : (
            emails.map((email) => (
              <div
                key={email.id}
                className="history-card mb-4"
              >

                <div className="history-top">

                  <div className="history-icon">
                    <FaEnvelope />
                  </div>

                  <div className="flex-grow-1">

                    <h5>{email.sender}</h5>

                    <p className="text-muted mb-2">
                      {email.subject}
                    </p>

                  </div>

                  <span className={getBadge(email.status)}>
                    {getIcon(email.status)} {email.status}
                  </span>

                </div>

                <hr />

                <div className="history-bottom">

                  <span>
                    <strong>Risk Score:</strong>{" "}
                    {email.riskScore}
                  </span>

                </div>

              </div>
            ))
          )}

        </div>
      </div>
    </>
  );
}

export default History;