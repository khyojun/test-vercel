import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redirect" element={<RedirectHandler />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Click the button below to authenticate with GitHub.</p>
      <a href="https://api.rankit.run/oauth2/authorization/github">
        <button>Login withw GitHub</button>
      </a>
    </div>
  );
}

function RedirectHandler() {
  const location = useLocation();

  // URL에서 쿼리 파라미터 추출
  const params = new URLSearchParams(location.search);
  const accessToken = params.get("accessToken");
  const refreshToken = params.get("refreshToken");

  return (
    <div>
      <h1>Redirect Page</h1>
      <p>Access Token: {accessToken}</p>
      <p>Refresh Token: {refreshToken}</p>
    </div>
  );
}

export default App;
