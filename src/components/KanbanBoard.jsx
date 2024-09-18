
import React from 'react';
import Column from './Column';
import { groupTickets } from '../utils/dataHelper';

const KanbanBoard = ({ tickets, groupBy, sortBy }) => {
  const groupedTickets = groupTickets(tickets, groupBy, sortBy);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(groupKey => (
        <Column key={groupKey} groupKey={groupKey} tickets={groupedTickets[groupKey]} />
      ))}
    </div>
  );
};

export default KanbanBoard;
