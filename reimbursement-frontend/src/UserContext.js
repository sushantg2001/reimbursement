import React, { useContext, useState, useEffect } from "react";

const UserContext = React.createContext();
const UserUpdateContext = React.createContext()

export function useUser(){
      return useContext(UserContext);
}
export function useUserUpdate(){
      return useContext(UserUpdateContext)
}

export function UserProvider({ children }) {
      const [isAdmin, setIsAdmin] = useState((localStorage.getItem('is_admin'))=== 'true');
      function updateAdmin(val) {
            setIsAdmin(val);
      }
      return <UserContext.Provider value={isAdmin}>
            <UserUpdateContext.Provider value={updateAdmin}>
                  {children}
            </UserUpdateContext.Provider>
      </UserContext.Provider>

}