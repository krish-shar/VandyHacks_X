interface MedProps {
  name: string;
  dosage: string;
  frequency: string;
  interval: string;
  status: string;
}

function MedCards(med: MedProps) {
  return (
    <header className="bg-gray-400 border-b border-primary/10 py-4 rounded-xl">
      <div>
        <div className="flex flex-col px-4">
          <div className="text-m">{med.name}</div>
          <div className="text-xs">{med.dosage}</div>
          <div className="text-xs">{med.frequency}</div>
          <div className="text-xs ">{med.interval}</div>
          <div
            className={`text-xs text-${
              med.status.toLowerCase() == "red"
                ? "red-500"
                : med.status.toLowerCase() == "yellow"
                ? "amber-300"
                : "lime-500"
            }`}
          >
            {med.status}
          </div>
        </div>
      </div>
    </header>

  );
}
export default MedCards;
