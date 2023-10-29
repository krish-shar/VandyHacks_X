import Header from "../Components/Header";
import { useAuth0 } from "@auth0/auth0-react";

import MedCards from "../Components/MedCards";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

interface MedCard {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  interval: string;
  status: string;
}


function Dashboard() {
  const [cards, setCards] = useState<MedCard[]>([]);
  const { user } = useAuth0();
  const username = user?.email;
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    if (username != undefined) {
      const medsSnapshot = await getDocs(
        collection(db, "Users", username, "Meds")
      );

      const newCards: MedCard[] = [];
      medsSnapshot.forEach((doc) => {
        newCards.push({
          id: doc.id,
          name: doc.id,
          dosage: doc.data()["Dosage"],
          frequency: "Derive",
          interval: doc.data()["Interval"],
          status: "Derive",
        });
      });

      setCards(newCards);
    }
    setIsLoading(false);
  };

  fetchData();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="spinner-border text-white" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }


  const medCards = medicine.map((med) => <MedCards name={med.name} dosage={med.dosage} frequency={med.frequency} interval={med.interval} taken={med.taken} status={med.status}/>)



  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Header />
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Your medicines!</h2>
        <p>Welcome, {user?.name}!</p>


        {cards.length > 0 && (
          <div className="py-2">
            <div className="bg-slate-800 rounded-xl p-4">
              <h2 className="text-white text-xl font-semibold">Today!</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cards.map((card) => (
                  <MedCards
                    key={card.id}
                    name={card.name}
                    dosage={card.dosage}
                    frequency={card.frequency}
                    interval={card.interval}
                    status={card.status}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

      </section>
      
    </main>
  );
}

export default Dashboard;
