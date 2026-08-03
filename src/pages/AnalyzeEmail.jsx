import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import api from "../services/api";

function AnalyzeEmail() {
  const [sender, setSender] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeEmail = async (e) => {
  e.preventDefault();

  setLoading(true);
  setResult(null);

  try {
    const response = await api.post("/emails/analyze", {
      sender,
      subject,
      body,
    });

    setResult(response.data);
  } catch (error) {
    alert("Unable to analyze email");
  } finally {
    setLoading(false);
  }
};
  return (
  <>
    <Navbar />

    <div style={styles.container}>
      <form style={styles.card} onSubmit={analyzeEmail}>
        <h1>Email Analyzer</h1>

        <input
          placeholder="Sender"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          style={styles.input}
          required
        />

        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={styles.input}
          required
        />

        <textarea
          placeholder="Email Body"
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={styles.textarea}
          required
        />

        <button style={styles.button}>
          Analyze Email
        </button>

        <div style={{ marginTop: "15px", textAlign: "center" }}>
          <Link to="/dashboard">
            <button
              type="button"
              style={{
                padding: "10px 20px",
                background: "#555",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Back to Dashboard
            </button>
          </Link>
        </div>
        {loading && (
  <div className="loading-card mt-4">

    <div className="spinner-border text-primary mb-3" role="status"></div>

    <h4>Analyzing Email...</h4>

    <p>
      CampusGuard AI is scanning for phishing
      indicators and suspicious content.
    </p>

  </div>
)}

        {result && (

  <div className="stats-card mt-5">

    <h3 style={{ marginBottom: "25px" }}>
      {getStatusIcon()} Analysis Result
    </h3>

    <h2>{result.status}</h2>

    <p>
      <strong>Risk Score:</strong> {result.riskScore}
    </p>

    {/* Threat Level */}
    <div className="mt-4">

      <strong>Threat Level</strong>

      <div
        className="progress mt-2"
        style={{ height: "12px" }}
      >
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${result.riskScore}%`,
            background:
              result.status === "SAFE"
                ? "#22C55E"
                : result.status === "SUSPICIOUS"
                ? "#F59E0B"
                : "#EC4899",
          }}
        ></div>
      </div>

    </div>

    {/* Recommendation */}
    <div className="recommendation-card mt-4">

      <h4>Recommended Action</h4>

      {result.status === "SAFE" && (
        <ul>
          <li>✅ Email appears safe.</li>
          <li>✅ No immediate action required.</li>
        </ul>
      )}

      {result.status === "SUSPICIOUS" && (
        <ul>
          <li>⚠ Verify the sender before responding.</li>
          <li>⚠ Avoid clicking unknown links.</li>
        </ul>
      )}

      {result.status === "PHISHING" && (
        <ul>
          <li>🚨 Do not click any links.</li>
          <li>🚨 Do not download attachments.</li>
          <li>🚨 Report this email immediately.</li>
        </ul>
      )}

    </div>

  </div>

)}
      </form>
    </div>
  </>
);
  


      
          
  
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f4f6f9",
  },

  card: {
    background: "white",
    padding: "30px",
    width: "500px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
  },

  textarea: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
  },

  result: {
    marginTop: "20px",
    padding: "15px",
    background: "#eef6ff",
    borderRadius: "8px",
  },
};

export default AnalyzeEmail;