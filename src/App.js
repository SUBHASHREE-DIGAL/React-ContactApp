import React from "react";
import ContactApp from "./components/ContactApp";

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-danger navbar-expand-lg">
        <a href="/" className="navbar-brand">
          Contact App
        </a>
      </nav>
      <ContactApp />
    </React.Fragment>
  );
}

export default App;
