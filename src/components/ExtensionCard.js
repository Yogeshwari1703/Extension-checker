import React from 'react';

const ExtensionCard = ({ extension, toggleExtension, index, formatDate }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="extension-name">
          <i className="fas fa-puzzle-piece extension-icon"></i>
          {extension.name}
        </div>
        <div className={`status-badge ${extension.enabled ? 'status-enabled' : 'status-disabled'}`}>
          <i className={`fas ${extension.enabled ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
          {extension.enabled ? 'Enabled' : 'Disabled'}
        </div>
      </div>
      
      <div className="extension-desc">{extension.description}</div>
      
      <div className="extension-id">ID: {extension.id}</div>
      
      <div className="card-footer">
        <button 
          className={`toggle-btn ${extension.enabled ? 'disable-btn' : 'enable-btn'}`} 
          onClick={() => toggleExtension(index)}
        >
          <i className={`fas ${extension.enabled ? 'fa-toggle-off' : 'fa-toggle-on'}`}></i>
          {extension.enabled ? 'Disable' : 'Enable'}
        </button>
        
        <div className="action-text">
          {extension.enabled ? 'Extension is currently active' : 'Extension is currently inactive'}
        </div>
      </div>
      
      <div className="last-updated">
        Last updated: {formatDate(extension.lastUpdated)}
      </div>
    </div>
  );
};

export default ExtensionCard;