"use client"; 

import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { User } from "../api/users/types";

export default function ClientWrapper({ initialUsers }: { initialUsers: User[] }) {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleUserAdded = async () => {
    const response = await fetch("/api/users", { cache: "no-store" });

    if (response.ok) {
      const updatedUsers: User[] = await response.json();
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
