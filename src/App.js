import React, { useState,useEffect} from 'react';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Stats from './components/Stats';
import ExtensionList from './components/ExtensionList';
import Footer from "./components/Footer";

// Extension data
const initialExtensions = [
  {
    id: "aapbdbdomjkkjkaonfhkkikfgjllcleb",
    name: "Google Translate",
    description: "View translations easily as you browse the web. By the Google Translate team.",
    enabled: true,
    lastUpdated: "2023-08-15T10:30:00Z"
  },
  {
    id: "cjpalhdlnbpafiamejdnhcphjbkeiagm",
    name: "uBlock Origin",
    description: "An efficient blocker for Chromium and Firefox. Fast and lean.",
    enabled: true,
    lastUpdated: "2023-08-20T14:45:00Z"
  },
  {
    id: "ghbmnnjooekpmoecnnnilnnbdlolhkhi",
    name: "Google Docs Offline",
    description: "Get things done offline with the Google Docs family of products.",
    enabled: false,
    lastUpdated: "2023-08-10T09:15:00Z"
  },
  {
    id: "nmmhkkegccagdldgiimedpiccmgmieda",
    name: "Google Wallet",
    description: "Fast, simple checkout for online purchases.",
    enabled: false,
    lastUpdated: "2023-08-18T16:20:00Z"
  },
  {
    id: "fmkadmapgofadopljbjfkapdkoienihi",
    name: "React Developer Tools",
    description: "Adds React debugging tools to the Chrome Developer Tools.",
    enabled: true,
    lastUpdated: "2023-08-22T11:10:00Z"
  },
  {
    id: "nhdogjmejiglipccpnnnanhbledajbpd",
    name: "Vue.js DevTools",
    description: "Browser devtools extension for debugging Vue.js applications.",
    enabled: true,
    lastUpdated: "2023-08-21T13:25:00Z"
  }
];

function App() {
  const [extensions, setExtensions] = useState(initialExtensions);

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Function to toggle extension status
  const toggleExtension = (index) => {
    const updatedExtensions = [...extensions];
    updatedExtensions[index] = {
      ...updatedExtensions[index],
      enabled: !updatedExtensions[index].enabled,
      lastUpdated: new Date().toISOString()
    };
    
    setExtensions(updatedExtensions);
  };

  return (
    <div className="container">
      <Header />
      <Instructions />
      <Stats extensions={extensions} />
      <ExtensionList 
        extensions={extensions} 
        toggleExtension={toggleExtension}
        formatDate={formatDate}
      />
      <Footer/>
    </div>
  );
}

export default App;