import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { calculateTarifario } from "../utils/calculator";
import { ACCOMMODATION } from "../constants/accommodation";
import { Button } from "./Button";

export function CalculatorForm({ onCalculate, onError }) {
    const [accommodationId, setAccommodationId] = useState("");
    const [checkInStr, setCheckInStr] = useState("");
    const [checkOutStr, setCheckOutStr] = useState("");
    const [adults, setAdults] = useState("");
    const [isCalculating, setIsCalculating] = useState(false);

    const handleCalculate = () => {
        if (!accommodationId || !checkInStr || !checkOutStr || !adults) {
            onError("Por favor, preencha todos os campos.");
            onCalculate(null);
            return;
        }

        setIsCalculating(true);
        
        setTimeout(() => {
            const result = calculateTarifario(checkInStr, checkOutStr, accommodationId, adults);
            if (result && result.error) {
                onError(result.error);
                onCalculate(null);
            } else {
                onCalculate(result);
            }
            setIsCalculating(false);
        }, 800);
    };

    return (
        <div className="bg-white border border-zinc-200 p-5 sm:p-7 rounded-2xl shadow-xl flex flex-col gap-5 relative">

            <h2 className="text-base font-semibold text-zinc-900">Nova Simulação</h2>

            <div className="flex flex-col gap-1.5 relative z-10">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Acomodação</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.values(ACCOMMODATION).map((acc) => (
                        <button
                            key={acc.id}
                            onClick={() => setAccommodationId(acc.id)}
                            type="button"
                            className={`flex flex-col text-left p-4 rounded-xl border ${
                                accommodationId === acc.id 
                                ? "bg-[#6e529f]/10 border-[#6e529f] shadow-[0_0_15px_rgba(110,82,159,0.1)]" 
                                : "bg-zinc-50 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100"
                            }`}
                        >
                            <span className={`font-semibold ${accommodationId === acc.id ? 'text-[#6e529f]' : 'text-zinc-800'}`}>
                                {acc.name}
                            </span>
                            <span className="text-sm text-zinc-500 mt-1">Até {acc.maxAdults} adultos</span>
                            <span className="text-xs font-medium text-zinc-400 mt-3">A partir de R$ {acc.dailyPrice}/noite</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Check-in</label>
                    <div className="relative">
                        <DatePicker
                            selected={checkInStr ? new Date(checkInStr + 'T12:00:00') : null}
                            onChange={(date) => setCheckInStr(date ? format(date, 'yyyy-MM-dd') : '')}
                            dateFormat="dd/MM/yyyy"
                            locale={ptBR}
                            placeholderText="Selecionar"
                            portalId="root-portal"
                            className="w-full bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#6e529f] focus:ring-1 focus:ring-[#6e529f] transition-all cursor-pointer"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Check-out</label>
                    <div className="relative">
                        <DatePicker
                            selected={checkOutStr ? new Date(checkOutStr + 'T12:00:00') : null}
                            onChange={(date) => setCheckOutStr(date ? format(date, 'yyyy-MM-dd') : '')}
                            dateFormat="dd/MM/yyyy"
                            locale={ptBR}
                            placeholderText="Selecionar"
                            portalId="root-portal"
                            className="w-full bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#6e529f] focus:ring-1 focus:ring-[#6e529f] transition-all cursor-pointer"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-1.5 relative z-10">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Adultos</label>
                <div className="flex items-center w-full bg-zinc-50 border border-zinc-200 rounded-xl overflow-hidden focus-within:border-[#6e529f] focus-within:ring-1 focus-within:ring-[#6e529f] transition-all">
                    <button 
                        type="button"
                        onClick={() => {
                            const val = parseInt(adults) || 1;
                            if(val > 1) setAdults(String(val - 1));
                        }}
                        className="px-5 py-3.5 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                    <input
                        type="number"
                        min="1"
                        placeholder="Ex: 2"
                        value={adults}
                        onChange={(e) => setAdults(e.target.value)}
                        className="w-full bg-transparent text-zinc-900 text-center outline-none py-3"
                    />
                    <button 
                        type="button"
                        onClick={() => {
                            const val = parseInt(adults) || 0;
                            setAdults(String(val + 1));
                        }}
                        className="px-5 py-3.5 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>
            </div>

            <Button onClick={handleCalculate} isCalculating={isCalculating} />
        </div>
    );
}
