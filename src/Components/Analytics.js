import React, { useState } from "react";
import "../Assests/CSS/dashboard.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";    // Install it -- npm install recharts

export default function Analytics() {
  const [period, setPeriod] = useState("today");

  // Demo KPI + chart data
  const demoData = {
    today: {
      totalUsers: 1234,
      activeUsers: 567,
      revenue: 89012,
      orders: 1234,
      topUsers: [
        { name: "User A", orders: 50 },
        { name: "User B", orders: 30 },
        { name: "User C", orders: 20 },
      ],
      userGrowth: [
        { hour: "8 AM", users: 50 },
        { hour: "10 AM", users: 120 },
        { hour: "12 PM", users: 200 },
        { hour: "2 PM", users: 300 },
      ],
      salesByProduct: [
        { product: "Shoes", sales: 150 },
        { product: "Bags", sales: 100 },
        { product: "Jackets", sales: 80 },
      ],
    },
    last7: {
      totalUsers: 8900,
      activeUsers: 4500,
      revenue: 560000,
      orders: 8900,
      topUsers: [
        { name: "User A", orders: 320 },
        { name: "User B", orders: 280 },
        { name: "User C", orders: 150 },
      ],
      userGrowth: [
        { day: "Mon", users: 1000 },
        { day: "Tue", users: 1500 },
        { day: "Wed", users: 2000 },
        { day: "Thu", users: 1800 },
        { day: "Fri", users: 2500 },
        { day: "Sat", users: 2200 },
        { day: "Sun", users: 2100 },
      ],
      salesByProduct: [
        { product: "Shoes", sales: 1200 },
        { product: "Bags", sales: 900 },
        { product: "Jackets", sales: 700 },
      ],
    },
    last30: {
      totalUsers: 34000,
      activeUsers: 22000,
      revenue: 2450000,
      orders: 34000,
      topUsers: [
        { name: "User A", orders: 1200 },
        { name: "User B", orders: 1100 },
        { name: "User C", orders: 900 },
      ],
      userGrowth: [
        { week: "Week 1", users: 8000 },
        { week: "Week 2", users: 9000 },
        { week: "Week 3", users: 9500 },
        { week: "Week 4", users: 10500 },
      ],
      salesByProduct: [
        { product: "Shoes", sales: 5000 },
        { product: "Bags", sales: 4000 },
        { product: "Jackets", sales: 3500 },
      ],
    },
  };

  const data =
    period === "today"
      ? demoData.today
      : period === "last7"
      ? demoData.last7
      : demoData.last30;

  // CSV export
  const exportCSV = () => {
    let csv = "Name,Orders\n";
    data.topUsers.forEach((user) => {
      csv += `${user.name},${user.orders}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `top-users-${period}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="analytics-container">
      {/* Header */}
      <div className="analytics-header">
        <h1>Analytics Dashboard</h1>
        <div className="header-buttons">
          <button
            className={period === "today" ? "active" : ""}
            onClick={() => setPeriod("today")}
          >
            Today
          </button>
          <button
            className={period === "last7" ? "active" : ""}
            onClick={() => setPeriod("last7")}
          >
            Last 7 Days
          </button>
          <button
            className={period === "last30" ? "active" : ""}
            onClick={() => setPeriod("last30")}
          >
            Last 30 Days
          </button>
          <button className="primary" onClick={exportCSV}>
            Export CSV
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <h2>Total Users</h2>
          <p>{data.totalUsers.toLocaleString()}</p>
        </div>
        <div className="kpi-card">
          <h2>Active Users</h2>
          <p>{data.activeUsers.toLocaleString()}</p>
        </div>
        <div className="kpi-card">
          <h2>Revenue</h2>
          <p>${data.revenue.toLocaleString()}</p>
        </div>
        <div className="kpi-card">
          <h2>Orders</h2>
          <p>{data.orders.toLocaleString()}</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="chart-grid">
        <div className="chart-card">
          <h2>User Growth</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={data.userGrowth}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={Object.keys(data.userGrowth[0])[0]} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Sales by Product</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data.salesByProduct}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Users */}
      <div className="chart-grid">
        <div className="chart-card">
          <h2>Top Users</h2>
          <ul>
            {data.topUsers.map((user) => (
              <li key={user.name}>
                <span>{user.name}</span>
                <span>{user.orders} orders</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
