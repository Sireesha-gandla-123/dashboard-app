import React from "react";
import "./App.css";

function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>My Dashboard</h2>
        <ul>
          <li>Home</li>
          <li>Reports</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Welcome, Sireesha!</h1>
        </header>

        <section className="cards">
          <div className="card">Users: 150</div>
          <div className="card">Sales: $1200</div>
          <div className="card">Growth: 15%</div>
        </section>

        <section className="table">
          <h2>Recent Reports</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Report A</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Report B</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Report C</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;
