import React, { useState, createContext, useContext } from "react";

const UserContext = createContext();

const App = () => {
  // const [user, setUser] = useState('Owais')
  // const [anotherUser, setAnotherUser] = useState('calvin')
  const users = [useState("Owais"), useState("Calvin")];
  return (
    <>
      {users?.map(([username, updateUsername], index) => (
        <UserContext.Provider key={index} value={{ username, updateUsername }}>
          <User />
        </UserContext.Provider>
      ))}
    </>
  );
};

export default App;

const User = () => {
  const { username } = useContext(UserContext);
  return (
    <div>
      username: {username}
      <AnotherUser />
    </div>
  );
};

const AnotherUser = () => {
  const { username, updateUsername } = useContext(UserContext);
  return (
    <div>
      <input
        value={username}
        onChange={(e) => updateUsername(e.target.value)}
        type="text"
      />
    </div>
  );
};
