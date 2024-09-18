import React, { useState, useEffect } from "react";
import axios from "axios";
import KanbanBoard from "./components/KanbanBoard";
import Dropdown from "./components/Dropdown";
import "./styles/KanbanBoard.css";
import Navbar from "./components/Navbar";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  // Fetch tickets from API
  useEffect(() => {
    console.log("Fetching tickets...");
    axios.get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then(response => {
        const { tickets } = response.data;  // Extract only the tickets array
        console.log("Tickets fetched:", tickets); // Add logging
        setTickets(tickets); // Set the tickets state
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    console.log("Tickets state updated:", tickets); // Add logging
  }, [tickets]);

  // Save and load view preferences from localStorage
  useEffect(() => {
    const savedGroupBy = localStorage.getItem('groupBy');
    const savedSortBy = localStorage.getItem('sortBy');
    if (savedGroupBy) setGroupBy(savedGroupBy);
    if (savedSortBy) setSortBy(savedSortBy);
  }, []);

  return (
    <>
    <Navbar/>
    <div className="app-container">
      <h1>Kanban Board</h1>
      <div className="controls">
        <Dropdown label="Group by" value={groupBy} setValue={setGroupBy} options={['status', 'user', 'priority']} />
        <Dropdown label="Sort by" value={sortBy} setValue={setSortBy} options={['priority', 'title']} />
      </div>
      <KanbanBoard tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
    </>
  );
};

export default App;
