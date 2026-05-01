export function Button({ onClick, isCalculating }) {
    return (
        <button
            onClick={onClick}
            disabled={isCalculating}
            className="mt-6 flex items-center justify-center gap-2 w-full bg-[#6e529f] hover:bg-[#5a4282] disabled:opacity-70 disabled:hover:bg-[#6e529f] disabled:hover:-translate-y-0 text-white font-medium py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] relative z-10 group text-sm"
        >
            {isCalculating ? (
                <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Calculando...
                </>
            ) : (
                <>
                    Calcular valor da estadia
                    <svg className="transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </>
            )}
        </button>
    );
}
