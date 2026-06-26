import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://backend-service:5000/")
      .then(res => res.text())
      .then(data => setMsg(data))
      .catch(() => setMsg("Backend not reachable"));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🐍 Python 3-Tier App</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
``
