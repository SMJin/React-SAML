const LoginButton = () => {
    const handleLogin = () => {
      window.location.href = "http://localhost:8080/saml/login"; // Spring Boot의 로그인 API 호출
    };
  
    return <button onClick={handleLogin}>Login with SAML</button>;
  };
  
  export default LoginButton;
  