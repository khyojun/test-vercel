import React from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* GitHub OAuth 페이지로 리다이렉션하는 버튼 */}
      <a
        href="https://api.rankit.run/oauth2/authorization/github"
        style={{
          padding: "10px 20px",
          backgroundColor: "#24292e",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      >
        Login with GitHub
      </a>
    </div>
  );
}

export default App;
