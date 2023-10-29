
import RelativeButton from "./RelativeButton";
import Statusbar from "./StatusBar";

interface MedProps {
    name: string;
    dosage: string;
    frequency: string;
    interval: string;
    status: string;
    taken: boolean;
}

function MedCards(med : MedProps) {

    return (
        <header className="bg-gray-700 border-primary/10 py-4 rounded-xl">

        <div className="flex flex-col px-4">
        <div>
        <div className="flex flex-row justify-between">
            <div className="text-m bold text-center justify-center content-center ">
            {med.name}
            </div>

            <div className="text-xs">
            <Statusbar label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" primaryColor={
                med.status.toLowerCase() == "red" ? "red-500" : med.status.toLowerCase() == "yellow" ? "amber-400" : "lime-700"
                } />
            </div>
            </div>
        <div className="text-gray-300">
        <div className="text-xs">
            {med.dosage}
            </div>
        <div className="text-xs">
            {med.frequency}
            </div>
            <div className="text-xs ">
                {med.interval}
            </div>
            <div className={`text-xs text-${
                med.status.toLowerCase() == "red" ? "red-500" : med.status.toLowerCase() == "yellow" ? "amber-300" : "lime-500"
                }`}>
                {/* {med.status} */}
                
                
            </div>
            <div className="py-2">
            <RelativeButton label={med.taken? `Already Taken` : 'Take!'} onClick={() => {
                console.log("Take");

            }} small fullWidth outline={med.taken}  secondary={!med.taken} disabled={med.taken}/>
            </div>
            </div>
        </div>
        </div>
        </header>

    );
