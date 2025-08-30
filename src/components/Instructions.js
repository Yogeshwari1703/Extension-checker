import React from 'react';

const Instructions = () => {
  return (
    <>
    <div className="instructions">
      <h2><i className="fas fa-info-circle"></i> How to Use</h2>
      <div className="instructions-content">
        <div className="instruction-step">
          <h3><i className="fas fa-search"></i> Step 1</h3>
          <p>Review the extension details including name, description, and ID.</p>
        </div>
        <div className="instruction-step">
          <h3><i className="fas fa-toggle-on"></i> Step 2</h3>
          <p>Check the current status of each extension (Enabled/Disabled).</p>
        </div>
        <div className="instruction-step">
          <h3><i className="fas fa-mouse-pointer"></i> Step 3</h3>
          <p>Click the toggle button to enable or disable the extension.</p>
        </div>
      </div>
      <div className="note">
    <p><b>Note:</b> Chrome extension APIs are only available to extensions themselves, not regular web pages. For demonstration purposes, we're using mock data when Demo Mode is enabled. Turn off Demo Mode to attempt real detection (which will only work in a Chrome extension environment).</p></div>

    </div>
    
    </>
  );
};

export default Instructions;