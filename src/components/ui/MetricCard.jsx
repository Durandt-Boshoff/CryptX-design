function MetricCard({ symbol, price, change }) {
    const isPositive = change.startsWith("+");

    return (
        <div className="rounded-xl bg-white p-5 shadow-sm">
            {/* Top Row */}
            <div className="mb-4 flex items-center justify-between">
                {/* Coin Icon */}
                <div className="h-8 w-8 items-center justify-center rounded-lg bg-indigo-500">
                    {/* Font Awesome icon */}
                </div>

                {/* Change */}
                <p
                    className={`text-xs font-medium ${
                        isPositive
                            ? "text-green-500"
                            : "text-red-500"
                    }`}
                >
                    {isPositive ? "▲" : "▼"} {change}
                </p>
            </div>

            {/* Price */}
            <h3 className="text-xl font-semibold text-gray-900">
                {price}
            </h3>

            {/* Coin Name */}
            <p className=" mt-1 text-xs text-gray-400">
                {symbol}
            </p>            
        </div>
    );
}

export default MetricCard;