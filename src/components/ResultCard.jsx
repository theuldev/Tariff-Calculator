
import { ResultRow } from "./ResultRow";
export function ResultCard({ result }) {
    
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };

    return (
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col h-full relative overflow-hidden">
            <h2 className="text-2xl font-semibold text-white mb-8">Resumo da Estadia</h2>
            
            <div className="flex-1 flex flex-col gap-4 text-zinc-300 relative z-10">
                
                {!result ? (
                    <div className="flex-1 flex items-center justify-center text-zinc-500 text-center h-full min-h-[200px]">
                        Preencha os dados e clique em calcular para ver o resumo.
                    </div>
                ) : (
                    <div className="flex flex-col gap-5">
                        <ResultRow 
                            label="Acomodação" 
                            value={result.accommodationName} 
                        />
                        <ResultRow 
                            label="Período" 
                            value={`${result.nights} ${result.nights === 1 ? 'noite' : 'noites'}`} 
                        />
                        <ResultRow 
                            label="Valor das diárias" 
                            value={formatCurrency(result.dailyRateTotal)} 
                        />
                        <ResultRow 
                            label="Taxa de limpeza" 
                            value={formatCurrency(result.cleaningFee)} 
                        />
                        <ResultRow 
                            label="Hóspedes Extras" 
                            value={formatCurrency(result.additionalAdultsCost)} 
                        />
                        
                        {result.discount > 0 && (
                            <ResultRow 
                                label="Desconto (Estadia Longa)" 
                                value={`- ${formatCurrency(result.discount)}`} 
                                isDiscount={true} 
                            />
                        )}
                    </div>
                )}
            </div>

            <div className="mt-8 pt-6 border-t border-purple-500/30 flex justify-between items-end relative z-10 bg-purple-500/5 p-6 rounded-2xl -mx-2 -mb-2">
                <span className="text-lg font-medium text-purple-200">Total final</span>
                <span className="text-3xl font-bold text-white">
                    {result ? formatCurrency(result.total) : 'R$ 0,00'}
                </span>
            </div>
            
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
    );
}
