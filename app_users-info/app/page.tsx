import ClientWrapper from "./components/UserWrapper";

export default async function Home() {
 
  const response = await fetch("http://localhost:3000/api/users", { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const initialUsers = await response.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>
      <ClientWrapper initialUsers={initialUsers} />
    </div>
  );
}
