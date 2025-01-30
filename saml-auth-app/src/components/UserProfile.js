import { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/saml/user", {
      credentials: "include", // 세션 정보 유지
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
};

export default UserProfile;
