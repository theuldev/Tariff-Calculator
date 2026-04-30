export function Header() {
    return (
        <header className="w-full bg-white/5 backdrop-blur-md border-b border-white/10 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-600/30">
                        H
                    </div>
                    <h1 className="text-xl font-semibold text-white tracking-wide">
                        Hospedin<span className="font-light text-purple-300">Calculator</span>
                    </h1>
                </div>
                <div className="text-sm text-purple-200/80 font-medium hidden sm:block border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 rounded-full">
                    Simulador de Tarifário
                </div>
            </div>
        </header>
    );
}
