import { useState } from "react";
import { Header } from "./components/Header";
import { CalculatorForm } from "./components/CalculatorForm";
import { ResultCard } from "./components/ResultCard";

function App() {
  const [calculationResult, setCalculationResult] = useState(null);

  return (
    <div className="min-h-screen bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(147,51,234,0.15),rgba(255,255,255,0))] font-sans selection:bg-purple-500/30">
      <Header />
      
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Simule sua estadia</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Escolha sua acomodação, as datas da reserva e saiba exatamente quanto vai custar sua experiência na Hospedin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <CalculatorForm onCalculate={setCalculationResult} />
          <ResultCard result={calculationResult} />
        </div>
      </main>
    </div>
  );
}

export default App;