
import { ResultRow } from "./ResultRow";
export function ResultCard({ result }) {
    
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };

    if (!result) return null;

    return (
        <div className="bg-white border border-zinc-200 p-5 sm:p-7 rounded-2xl shadow-xl flex flex-col h-full relative overflow-hidden">
            <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-[#6e529f]/10 rounded-lg text-[#6e529f]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h2 className="text-base font-semibold text-zinc-900">Resumo da Estadia</h2>
            </div>
            
            <div className="flex-1 flex flex-col gap-4 text-zinc-700 relative z-10">
                <div className="flex flex-col gap-5 bg-zinc-50 p-6 rounded-xl border border-zinc-200">
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
            </div>

            <div className="mt-6 pt-5 border-t border-[#6e529f]/30 flex justify-between items-end relative z-10 bg-[#6e529f]/10 p-5 rounded-xl -mx-2 -mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#6e529f]">Total final</span>
                <span className="text-lg font-bold text-zinc-900">
                    {formatCurrency(result.total)}
                </span>
            </div>
            
        </div>
    );
}
