import Header from '../Components/Header';
import { useAuth0 } from "@auth0/auth0-react";
import MedCards from '../Components/MedCards';
import { medicine } from '../Components/MockMedicine';

function Dashboard() {
  const { user } = useAuth0();


  const medCards = medicine.map((med) => <MedCards name={med.name} dosage={med.dosage} frequency={med.frequency} interval={med.interval} taken={med.taken} status={med.status}/>)



  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Header />
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Your medicines!</h2>
        <p>Welcome, {user?.name}!</p>
        
        <div className='py-2'>
          <div className="bg-slate-800 rounded-xl p-4">
            <h2 className="text-white text-xl font-semibold">Today!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {medCards}
            </div>
          </div>
        </div>
    
      </section>
      
    </main>
  );
}

export default Dashboard;
