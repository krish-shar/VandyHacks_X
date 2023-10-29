import Header from "../Components/Header";
import {useAuth0} from "@auth0/auth0-react";
import MedCards from "../Components/MedCards";

import axios from "axios";



import {medicine} from "../Components/MockMedicine";
import Cam from "../Components/Camera";
import {useEffect, useState} from "react";
import RelativeButton from "../Components/RelativeButton";




interface DoseStatusResponse {
    dosed: boolean;
}

async function checkDoseStatus(): Promise < DoseStatusResponse > {
    const response = await axios.get < DoseStatusResponse > ("http://localhost:8080/dose_status");

    return response.data;
}

function Dashboard() { 


    const {user} = useAuth0();

    const [showCamera, setShowCamera] = useState(false);

    const [name, setName] = useState("");

    const [dosed, setDosed] = useState < boolean > (false);

    const [finished, setFinished] = useState < boolean > (false);

    useEffect(() => {
        const checkDoseStatusInterval = setInterval(async () => {
            const doseStatus = await checkDoseStatus();
            if (doseStatus.dosed) {
                setDosed(true);
            }
        }, 1000);

        return() => {
            clearInterval(checkDoseStatusInterval);
        };
    }, []);


    const medCards = medicine.map((med) => (
        <MedCards key={
                med.name
            }
            name={
                med.name
            }
            dosage={
                med.dosage
            }
            frequency={
                med.frequency
            }
            interval={
                med.interval
            }
            status={
                med.status
            }
            taken={
                med.taken
            }
            onClick={
                () => {
                    axios.get('http://localhost:8080/reset_dose');
                    setShowCamera(true);
                    setName(med.name);

                }
            }/>
    ));


    if (dosed) {
        axios.get('http://localhost:8080/reset_dose');
        setShowCamera(false);
        setDosed(false);
        setName("");

        // chekf if all meds are taken
        const allTaken = medicine.every((med) => med.taken);
        if (allTaken) {
            setFinished(true);
        }
        medicine.forEach((med) => {
            if (med.name === name) {
                med.taken = true;
            }
            

            return med;
        }
        );
    }

    if (finished) {
        return (
            <main className="bg-gray-900 text-white min-h-screen">
                <Header/>
                <section className="container mx-auto p-4">
                    <h2 className="text-2xl font-bold">You have finished your medicine for today!!</h2>
                    <p>See you tomorrow!</p>
                    <div className="relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">



                        <svg className="w-20 h-20 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd"
                            d="M17.707 5.293a1 1 0 010 1.414l-10 10a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L7 14.586l9.293-9.293a1 1 0 011.414 0z"
                            clipRule="evenodd"/>
                        </svg>

                      </div>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="bg-gray-900 text-white min-h-screen">
            <Header/>
            <section className="container mx-auto p-4">
                <h2 className="text-2xl font-bold">Your medicines!</h2>
                <p>Welcome, {
                    user ?. name
                }!</p>

                <div>
                    <div className="bg-slate-800 rounded-xl p-4">
                        <h2 className="text-white text-xl font-semibold">Today!</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {medCards} </div>
                    </div>
                    {
                    showCamera && (
                        <div className="flex flex-col">
                            <Cam label={name}/>
                            <RelativeButton label="Cancel"
                                onClick={
                                    () => {
                                        setShowCamera(false)
                                    }
                                }/>
                        </div>

                    )
                } </div>


            </section>

        </main>
    );
}

export default Dashboard;

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";
// import { useState } from "react";

// const [cards, setCards] = useState<MedCard[]>([]);
    // const username = user?.email;
    // const [isLoading, setIsLoading] = useState(true);

// interface MedCard {
// id: string;
// name: string;
// dosage: string;
// frequency: string;
// interval: string;
// status: string;
// taken: boolean;
// }

// const fetchData = async () => {
//     if (username != undefined) {
//       const medsSnapshot = await getDocs(
//         collection(db, "Users", username, "Meds")
//       );

//       const newCards: MedCard[] = [];
//       medsSnapshot.forEach((doc) => {
//         newCards.push({
//           id: doc.id,
//           name: doc.id,
//           dosage: doc.data()["Dosage"],
//           frequency: "Derive",
//           interval: doc.data()["Interval"],
//           status: "Derive",
//           taken: doc.data()["Taken"] || "true",
//         });
//       });

//       setCards(newCards);
//     }
//     setIsLoading(false);
// };

// fetchData();

// if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-full">
//         <div className="spinner-border text-white" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
// }

{ /* {cards.length > 0 && (
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
                    taken={card.taken}
                  />
                ))}
              </div>
            </div>
          </div>
        )} */
}
