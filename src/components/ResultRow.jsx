export function ResultRow({ label, value, isDiscount = false }) {
    return (
        <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
            <span className={`font-medium ${isDiscount ? 'text-green-400' : 'text-zinc-400'}`}>
                {label}
            </span>
            <span className={`font-medium text-right ${isDiscount ? 'text-green-400' : 'text-white'}`}>
                {value}
            </span>
        </div>
    );
}
