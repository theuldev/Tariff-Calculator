import logo from '../assets/logo.png';

export function Header() {
    return (
        <header className="w-full bg-white border-b border-zinc-200 py-4 px-6 sticky top-0 z-50">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Hospedin Logo" className="h-8 object-contain rounded-lg" />
                    <div className="h-6 w-px bg-zinc-200 mx-2"></div>
                    <h1 className="text-xl font-semibold text-zinc-900 tracking-wide">
                        Calculadora de <span className="font-bold text-[#6e529f]">Tarifário</span>
                    </h1>
                </div>
            </div>
        </header>
    );
}
