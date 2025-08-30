import React from 'react';
import ExtensionCard from './ExtensionCard';

const ExtensionList = ({ extensions, toggleExtension, formatDate }) => {
  return (
    <div className="cards-grid">
      {extensions.map((extension, index) => (
        <ExtensionCard 
          key={extension.id}
          extension={extension}
          index={index}
          toggleExtension={toggleExtension}
          formatDate={formatDate}
        />
      ))}
    </div>
  );
};

export default ExtensionList;