import Header from '../Components/Header';
import { useAuth0 } from "@auth0/auth0-react";

function Dashboard() {
  const { user } = useAuth0();

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Header />
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Your medicines!</h2>
        <p>Welcome, {user?.name}!</p>
      </section>
    </main>
  );
}

export default Dashboard;
