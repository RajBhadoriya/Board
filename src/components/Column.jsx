// src/components/Column.jsx
import React from 'react';
import TicketCard from './TicketCard';
import '../styles/Column.css';

const Column = ({ groupKey, tickets }) => {
  return (
    <div className="column">
      <h2>{groupKey}</h2>
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;
