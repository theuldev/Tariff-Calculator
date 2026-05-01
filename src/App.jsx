import { useState } from "react";
import { Header } from "./components/Header";
import { CalculatorForm } from "./components/CalculatorForm";
import { ResultCard } from "./components/ResultCard";
import { Alert } from "./components/Alert";

function App() {
  const [calculationResult, setCalculationResult] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);

  const showError = (msg) => {
    setAlertMessage(msg);
    setTimeout(() => setAlertMessage(null), 5000);
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-[#6e529f]/30">
      <Header />
      
      <Alert message={alertMessage} onClose={() => setAlertMessage(null)} />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="text-center mb-8 transition-all duration-500">
          <h2 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-2">Simule sua estadia</h2>
          <p className="text-zinc-600 max-w-xl mx-auto text-xs">
            Escolha sua acomodação, as datas da reserva e saiba exatamente quanto vai custar sua experiência na Hospedin.
          </p>
        </div>

        <div className={`grid grid-cols-1 ${calculationResult ? 'lg:grid-cols-2' : 'max-w-2xl mx-auto'} gap-6 lg:gap-8 items-start transition-all duration-500`}>
          <CalculatorForm onCalculate={setCalculationResult} onError={showError} />
          
          {calculationResult && (
             <div className="animate-in fade-in slide-in-from-right-8 duration-700 h-full">
                <ResultCard result={calculationResult} />
             </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;