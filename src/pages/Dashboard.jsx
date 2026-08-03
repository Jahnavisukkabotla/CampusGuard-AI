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
import { useEffect, useState } from "react";
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

          {/* Hero */}
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

          {/* Stats */}
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

          {/* Charts */}
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

export default Dashboard;