// src/components/TicketCard.jsx
import React from 'react';
import '../styles/TicketCard.css';

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <div className="ticket-meta">
        <span className={`priority priority-${ticket.priority}`}>Priority {ticket.priority}</span>
        <span>Status: {ticket.status}</span>
      </div>
    </div>
  );
};

export default TicketCard;
