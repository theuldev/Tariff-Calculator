export function ResultRow({ label, value, isDiscount = false }) {
    return (
        <div className="flex justify-between items-center pb-4 border-b border-zinc-200">
            <span className={`font-medium ${isDiscount ? 'text-green-600' : 'text-zinc-600'}`}>
                {label}
            </span>
            <span className={`font-medium text-right ${isDiscount ? 'text-green-600' : 'text-zinc-900'}`}>
                {value}
            </span>
        </div>
    );
}
