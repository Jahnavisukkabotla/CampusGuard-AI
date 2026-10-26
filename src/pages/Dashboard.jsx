/*import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "../styles/dashboard.css";
import * as CountUpModule from "react-countup";
const CountUp = CountUpModule.default || CountUpModule;

import ThreatChart from "../components/ThreatChart";
import RecentActivity from "../components/RecentActivity";
import EmailTrendChart from "../components/EmailTrendChart";

import {
  FaEnvelope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaBug,
  FaArrowRight,
} from "react-icons/fa";

function Dashboard() {
  const [stats, setStats] = useState({
    totalEmails: 0,
    safeEmails: 0,
    suspiciousEmails: 0,
    phishingEmails: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get("/dashboard/stats");
      setStats(response.data);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="page-container">
        <div className="container py-5">

          {/* Welcome Section */ /*
          <div className="mb-5 text-center">
            <h1 className="dashboard-title">
              🛡️ CampusGuard AI
            </h1>

            <p className="dashboard-subtitle">
              AI-powered Email Threat Detection & Cybersecurity Dashboard
            </p>

            <Link to="/analyze">
              <button className="primary-btn">
                Analyze New Email
                <FaArrowRight style={{ marginLeft: "10px" }} />
              </button>
            </Link>
          </div>

          {/* Statistics Cards *//*
          <div className="row g-4">

            <div className="col-lg-3 col-md-6">
              <div className="stats-card">
                <div
                  className="stats-icon"
                  style={{
                    background: "linear-gradient(135deg,#8B5CF6,#EC4899)",
                  }}
                >
                  <FaEnvelope />
                </div>

                <div className="card-title">Total Emails</div>
                <div className="card-value">
  <CountUp
    end={stats.totalEmails}
    duration={1.5}
  />
</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-card">
                <div
                  className="stats-icon"
                  style={{ background: "#22C55E" }}
                >
                  <FaCheckCircle />
                </div>

                <div className="card-title">Safe Emails</div>
                <div className="card-value">{stats.safeEmails}</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-card">
                <div
                  className="stats-icon"
                  style={{ background: "#F59E0B" }}
                >
                  <FaExclamationTriangle />
                </div>

                <div className="card-title">Suspicious</div>
                <div className="card-value">{stats.suspiciousEmails}</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-card">
                <div
                  className="stats-icon"
                  style={{ background: "#EC4899" }}
                >
                  <FaBug />
                </div>

                <div className="card-title">Phishing</div>
                <div className="card-value">{stats.phishingEmails}</div>
              </div>
            </div>

          </div>

          {/* Charts & Activity *//*
          <div className="row mt-5 g-4">

            <div className="col-lg-6">
                 
             <div>Threat Chart</div>
            </div>

            <div className="col-lg-6">
              <RecentActivity />
            </div>

          </div>
          <div className="row mt-4">

    <div className="col-12">

        <EmailTrendChart/>

    </div>

</div>

        </div>
      </div>
    </>
  );
}

export default Dashboard; */
{/* import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import RecentActivity from "../components/RecentActivity";
import EmailTrendChart from "../components/EmailTrendChart";
import api from "../services/api";
import "../styles/dashboard.css";

import CountUpModule from "react-countup";
const CountUp = CountUpModule.default;

import {
  FaEnvelope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaBug,
  FaArrowRight,
} from "react-icons/fa";

function Dashboard() {
  const [stats, setStats] = useState({
    totalEmails: 0,
    safeEmails: 0,
    suspiciousEmails: 0,
    phishingEmails: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get("/dashboard/stats");
      setStats(response.data);
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="page-container">
        <div className="container py-5">

       
          <div className="text-center mb-5">
            <h1 className="dashboard-title">
              🛡️ CampusGuard AI
            </h1>

            <p className="dashboard-subtitle">
              AI Powered Email Threat Detection Dashboard
            </p>

            <Link to="/analyze">
              <button className="primary-btn">
                Analyze Email
                <FaArrowRight style={{ marginLeft: 10 }} />
              </button>
            </Link>
          </div>

      
          <div className="row g-4">

            <div className="col-lg-3 col-md-6">
              <div className="stats-card">
                <div
                  className="stats-icon"
                  style={{
                    background:
                      "linear-gradient(135deg,#8B5CF6,#EC4899)",
                  }}
                >
                  <FaEnvelope />
                </div>

                <div className="card-title">
                  Total Emails
                </div>

                <div className="card-value">
                  <CountUp
                    end={stats.totalEmails}
                    duration={1.5}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-card">

                <div
                  className="stats-icon"
                  style={{ background: "#22C55E" }}
                >
                  <FaCheckCircle />
                </div>

                <div className="card-title">
                  Safe Emails
                </div>

                <div className="card-value">
                  {stats.safeEmails}
                </div>

              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-card">

                <div
                  className="stats-icon"
                  style={{ background: "#F59E0B" }}
                >
                  <FaExclamationTriangle />
                </div>

                <div className="card-title">
                  Suspicious
                </div>

                <div className="card-value">
                  {stats.suspiciousEmails}
                </div>

              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-card">

                <div
                  className="stats-icon"
                  style={{ background: "#EC4899" }}
                >
                  <FaBug />
                </div>

                <div className="card-title">
                  Phishing
                </div>

                <div className="card-value">
                  {stats.phishingEmails}
                </div>

              </div>
            </div>

          </div>

        
          <div className="row mt-5">

            <div className="col-lg-6 mb-4">
              <EmailTrendChart />
            </div>

            <div className="col-lg-6 mb-4">
              <RecentActivity />
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard; */}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import RecentActivity from "../components/RecentActivity";
import EmailTrendChart from "../components/EmailTrendChart";
import api from "../services/api";
import "../styles/dashboard.css";

import {
  FaEnvelope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaBug,
  FaArrowRight,
  FaShieldAlt,
  FaLock,
  FaSyncAlt,
  FaChartLine,
} from "react-icons/fa";

function Dashboard() {
  const [stats, setStats] = useState({
    totalEmails: 0,
    safeEmails: 0,
    suspiciousEmails: 0,
    phishingEmails: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStats = async () => {
    try {
      setError("");
      const response = await api.get("/dashboard/stats");
      setStats((previous) => ({ ...previous, ...response.data }));
    } catch (err) {
      console.error("Error fetching dashboard stats:", err);
      setError("Unable to load statistics. Please try refreshing.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const cards = [
    {
      label: "Emails Analyzed",
      value: stats.totalEmails,
      icon: <FaEnvelope />,
      color: "blue",
      description: "Total emails processed",
    },
    {
      label: "Safe Emails",
      value: stats.safeEmails,
      icon: <FaCheckCircle />,
      color: "green",
      description: "Classified as safe",
    },
    {
      label: "Suspicious",
      value: stats.suspiciousEmails,
      icon: <FaExclamationTriangle />,
      color: "amber",
      description: "Require further review",
    },
    {
      label: "Phishing Detected",
      value: stats.phishingEmails,
      icon: <FaBug />,
      color: "red",
      description: "Identified as phishing",
    },
  ];

  const safeRate =
    Number(stats.totalEmails) > 0
      ? Math.round(
          (Number(stats.safeEmails) / Number(stats.totalEmails)) * 100
        )
      : 0;

  return (
    <>
      <Navbar />

      <main className="cg-dashboard">
        <div className="cg-dashboard-inner">
          {/* Page heading */}
          <section className="cg-welcome">
            <div className="cg-welcome-copy">
              <div className="cg-eyebrow">
                <span className="cg-live-dot" />
                EMAIL SECURITY CENTER
              </div>

              <h1>
                Security <span>Overview</span>
              </h1>

              <p>
                Monitor email threats, review activity, and protect your
                campus from phishing attacks.
              </p>
            </div>

            <Link to="/analyze" className="cg-primary-button">
              <FaShieldAlt />
              Analyze an Email
              <FaArrowRight />
            </Link>
          </section>

          {/* Security status banner */}
          <section className="cg-status-banner">
            <div className="cg-status-icon">
              <FaLock />
            </div>

            <div className="cg-status-copy">
              <h2>Your security workspace</h2>
              <p>
                Review email analysis results and identify potentially
                harmful messages.
              </p>
            </div>

            <div className="cg-status-tag">
              <span className="cg-live-dot" />
              Monitoring dashboard
            </div>
          </section>

          {/* Statistics */}
          <section className="cg-section">
            <div className="cg-section-heading">
              <div>
                <span className="cg-section-kicker">AT A GLANCE</span>
                <h2>Email Statistics</h2>
              </div>

              <button
                type="button"
                className="cg-refresh-button"
                onClick={fetchStats}
                disabled={loading}
              >
                <FaSyncAlt className={loading ? "cg-spinning" : ""} />
                Refresh
              </button>
            </div>

            {error && (
              <div className="cg-error" role="alert">
                {error}
              </div>
            )}

            <div className="cg-stats-grid">
              {cards.map((card) => (
                <article
                  className={`cg-stat-card cg-${card.color}`}
                  key={card.label}
                >
                  <div className="cg-stat-top">
                    <div className="cg-stat-icon">{card.icon}</div>
                    <span className="cg-stat-indicator" />
                  </div>

                  <p className="cg-stat-label">{card.label}</p>

                  <div className="cg-stat-value">
                    {loading ? (
                      <span className="cg-loading-value">—</span>
                    ) : (
                      Number(card.value || 0).toLocaleString()
                    )}
                  </div>

                  <p className="cg-stat-description">{card.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Insights */}
          <section className="cg-insights-grid">
            <article className="cg-insight-card">
              <div className="cg-insight-icon">
                <FaChartLine />
              </div>

              <div className="cg-insight-content">
                <span>SAFE EMAIL RATE</span>
                <h3>{loading ? "—" : `${safeRate}%`}</h3>
                <p>
                  {loading
                    ? "Calculating from email statistics"
                    : "Share of analyzed emails classified as safe"}
                </p>
              </div>

              <div
                className="cg-progress-track"
                role="progressbar"
                aria-label="Safe email rate"
                aria-valuenow={safeRate}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="cg-progress-fill"
                  style={{ width: `${loading ? 0 : safeRate}%` }}
                />
              </div>
            </article>

            <article className="cg-insight-card cg-insight-action">
              <div className="cg-insight-icon purple">
                <FaShieldAlt />
              </div>

              <div className="cg-insight-content">
                <span>SECURITY ACTION</span>
                <h3>Check an email</h3>
                <p>Analyze a suspicious message for potential threats.</p>
              </div>

              <Link to="/analyze" className="cg-text-link">
                Start analysis <FaArrowRight />
              </Link>
            </article>
          </section>

          {/* Charts and activity */}
          <section className="cg-section cg-activity-section">
            <div className="cg-section-heading">
              <div>
                <span className="cg-section-kicker">UNDERSTAND THE DATA</span>
                <h2>Security Analytics</h2>
              </div>
            </div>

            <div className="cg-analytics-grid">
              <div className="cg-panel cg-trend-panel">
                <div className="cg-panel-heading">
                  <div>
                    <h3>Email Trends</h3>
                    <p>Analysis activity over time</p>
                  </div>
                </div>
                <div className="cg-panel-content">
                  <EmailTrendChart />
                </div>
              </div>

              <div className="cg-panel cg-recent-panel">
                <div className="cg-panel-heading">
                  <div>
                    <h3>Recent Activity</h3>
                    <p>Your latest email analyses</p>
                  </div>
                </div>
                <div className="cg-panel-content">
                  <RecentActivity />
                </div>
              </div>
            </div>
          </section>

          <footer className="cg-dashboard-footer">
            <span>
              <FaShieldAlt /> CampusGuard AI
            </span>
            <span>Email Threat Detection &amp; Security Analytics</span>
          </footer>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
