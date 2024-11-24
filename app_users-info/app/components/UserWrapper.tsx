"use client"; 

import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default function ClientWrapper({ initialUsers }: { initialUsers: any[] }) {
  const [users, setUsers] = useState(initialUsers);

  const handleUserAdded = async () => {
    const response = await fetch("/api/users", { cache: "no-store" });

    if (response.ok) {
      const updatedUsers = await response.json();
      setUsers(updatedUsers); 
    }
  };

  return (
    <>
      <UserForm onUserAdded={handleUserAdded} />
      <UserList users={users} />
    </>
  );
}
