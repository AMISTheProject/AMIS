import React, { createContext, useState } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');

  return (
    <RoleContext.Provider value={{ username, setUsername, role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export default RoleContext;
