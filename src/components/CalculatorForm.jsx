export function CalculatorForm() {
    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <h2 className="text-2xl font-semibold text-white">Nova Simulação</h2>
            
            <div className="flex flex-col gap-2 relative z-10">
                <label className="text-sm font-medium text-zinc-300">Acomodação</label>
                <div className="relative">
                    <select 
                        defaultValue="" 
                        className="w-full bg-zinc-900/60 border border-zinc-700/80 text-white rounded-xl px-4 py-3.5 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none cursor-pointer"
                    >
                        <option value="" disabled>Selecione uma acomodação</option>
                        <option value="SUITE_JARDIM">Suíte Jardim (até 2 adultos)</option>
                        <option value="CHALE_FAMILIA">Chalé Família (até 4 adultos)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-300">Check-in</label>
                    <input 
                        type="date" 
                        className="w-full bg-zinc-900/60 border border-zinc-700/80 text-white rounded-xl px-4 py-3 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all [color-scheme:dark]" 
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-300">Check-out</label>
                    <input 
                        type="date" 
                        className="w-full bg-zinc-900/60 border border-zinc-700/80 text-white rounded-xl px-4 py-3 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all [color-scheme:dark]" 
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2 relative z-10">
                <label className="text-sm font-medium text-zinc-300">Número de Adultos</label>
                <input 
                    type="number" 
                    min="1" 
                    placeholder="Ex: 2" 
                    className="w-full bg-zinc-900/60 border border-zinc-700/80 text-white rounded-xl px-4 py-3 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" 
                />
            </div>

            <button className="mt-4 w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] active:scale-[0.98] relative z-10">
                Calcular valor da estadia
            </button>
        </div>
    );
}
