"use client"; 

import { useState, useEffect } from "react";
import ClientWrapper from "./components/UserWrapper";

export default function Home() {
  const [initialUsers, setInitialUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setInitialUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>
      <ClientWrapper initialUsers={initialUsers} />
    </div>
  );
}
