export function ResultCard() {
    return (
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col h-full relative overflow-hidden">
            <h2 className="text-2xl font-semibold text-white mb-8">Resumo da Estadia</h2>
            
            <div className="flex-1 flex flex-col gap-4 text-zinc-300 relative z-10">
                

                <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                        <span className="font-medium text-zinc-400">Acomodação</span>
                        <span className="text-white font-medium text-right">Suíte Jardim</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                        <span className="font-medium text-zinc-400">Período</span>
                        <span className="text-white font-medium text-right">2 noites</span>
                    </div>

                    <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                        <span className="font-medium text-zinc-400">Valor das diárias</span>
                        <span className="text-white font-medium text-right">R$ 600,00</span>
                    </div>

                    <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                        <span className="font-medium text-zinc-400">Taxa de limpeza</span>
                        <span className="text-white font-medium text-right">R$ 80,00</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                        <span className="font-medium text-zinc-400">Hóspedes Extras</span>
                        <span className="text-white font-medium text-right">R$ 0,00</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-500/30 flex justify-between items-end relative z-10 bg-purple-500/5 p-6 rounded-2xl -mx-2 -mb-2">
                <span className="text-lg font-medium text-purple-200">Total final</span>
                <span className="text-3xl font-bold text-white">R$ 680,00</span>
            </div>
            
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
    );
}
