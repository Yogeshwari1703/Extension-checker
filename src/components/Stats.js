import React from 'react';

const Stats = ({ extensions }) => {
  const enabledCount = extensions.filter(ext => ext.enabled).length;
  const disabledCount = extensions.length - enabledCount;
  
  return (
    <div className="stats-container">
      <div className="stat">
        <div className="stat-number">{extensions.length}</div>
        <div className="stat-label">Total Extensions</div>
      </div>
      <div className="stat">
        <div className="stat-number">{enabledCount}</div>
        <div className="stat-label">Enabled</div>
      </div>
      <div className="stat">
        <div className="stat-number">{disabledCount}</div>
        <div className="stat-label">Disabled</div>
      </div>
    </div>
  );
};

export default Stats;