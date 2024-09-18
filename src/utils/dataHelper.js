// src/utils/dataHelper.js
export const groupTickets = (tickets, groupBy, sortBy) => {
    // Group tickets by the selected property (e.g., status, user, priority)
    const grouped = tickets.reduce((acc, ticket) => {
      const key = ticket[groupBy];
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});
  
    // Sort each group of tickets by the selected sorting criterion (e.g., priority, title)
    Object.keys(grouped).forEach(group => {
      grouped[group].sort((a, b) => {
        if (sortBy === 'priority') return b.priority - a.priority;
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        return 0;
      });
    });
  
    return grouped;
  };
  