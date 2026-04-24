import { Suspense, use } from "react";

function Users() {
  const users = use(
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json(),
    ),
  );

  return (
    <ul>
      {users.map((u: any) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Users</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <Users />
      </Suspense>
    </div>
  );
}
