import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);

    fetch("/api/users/patients")
      .then((response) => {
        console.log("Is there anything in here??", response);
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  console.log(users);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user._id}>
            <p>{user.firstName}</p>
            <p>{user.streetName}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
