import './App.css';
import LoginButton from './components/LoginButton';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <h1>SAML Authentication with Keycloak</h1>
      <LoginButton />
      <UserProfile />
    </div>
  );
}

export default App;
