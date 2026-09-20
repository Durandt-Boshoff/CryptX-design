const marketData = [
    {
        name: "Ethereum",
        symbol: "ETH / USDT",
        change: "+14.02%",
        price: "39,786 USD",
        positive: true,
        chartColor: "stroke-indigo-500",
        chart:
            "M2 16 C8 16 10 22 16 22 C22 22 22 31 30 31 C38 31 39 18 47 18 C55 18 56 27 65 27 C73 27 72 14 82 14 C90 14 91 20 100 20 C109 20 111 15 120 15 C130 15 133 10 141 10 C150 10 149 4 157 4 C166 4 165 24 175 24 C182 24 183 18 190 18",
    },
    {
        name: "Bitcoin",
        symbol: "ETH / USDT",
        change: "+4.02%",
        price: "21,786 USD",
        positive: true,
        chartColor: "stroke-amber-400",
        chart:
            "M2 17 C10 17 13 23 20 23 C27 23 29 32 37 32 C46 32 48 17 57 17 C66 17 67 29 76 29 C85 29 86 14 95 14 C104 14 105 20 114 20 C123 20 123 16 132 16 C141 16 143 12 151 12 C159 12 160 3 169 3 C179 3 179 24 188 24 C194 24 196 18 200 18",
    },
    {
        name: "Litecoin",
        symbol: "LTC / USDT",
        change: "-4.02%",
        price: "9,786 USD",
        positive: false,
        chartColor: "stroke-blue-500",
        chart:
            "M2 16 C10 16 13 22 20 22 C27 22 28 30 36 30 C44 30 46 17 54 17 C63 17 64 28 72 28 C81 28 82 13 91 13 C100 13 101 21 110 21 C119 21 120 16 130 16 C140 16 143 12 151 12 C159 12 160 5 169 5 C179 5 179 24 188 24 C195 24 195 18 200 18",
    },
    {
        name: "Cardano",
        symbol: "ADA / USDT",
        change: "+0.02%",
        price: "4,786 USD",
        positive: true,
        chartColor: "stroke-green-500",
        chart:
            "M2 17 C10 17 12 21 20 21 C28 21 29 31 38 31 C47 31 48 19 57 19 C66 19 66 29 76 29 C85 29 86 13 95 13 C104 13 106 21 115 21 C124 21 125 16 134 16 C143 16 145 12 153 12 C162 12 163 5 171 5 C181 5 180 23 189 23 C196 23 198 18 200 18",
    },
];

function LiveMarket() {
    return (
        <section>
            <h2 className="mb-5 text-lg font-semibold text-gray-900">
                Live Market
            </h2>

            <div className="flex flex-col gap-6">
                {marketData.map((coin) => (
                    <div
                        key={coin.name}
                        className="grid grid-cols-[1.5fr_0.9fr_0.9fr_1.3fr] items-center gap-5"
                    >
                        {/* Coin */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200">
                                {/* Font Awesome icon later */}
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-gray-700">
                                    {coin.name}
                                </p>

                                <p className="mt-1 text-xs text-gray-400">
                                    {coin.symbol}
                                </p>
                            </div>
                        </div>

                        {/* Change */}
                        <div>
                            <p className="text-[11px] text-gray-400">
                                Change
                            </p>

                            <p
                                className={`mt-2 text-xs ${
                                    coin.positive
                                        ? "text-green-500"
                                        : "text-orange-400"
                                }`}
                            >
                                {coin.change}
                            </p>
                        </div>

                        {/* Price */}
                        <div>
                            <p className="text-[11px] text-gray-400">
                                Price
                            </p>

                            <p className="mt-2 text-xs font-medium text-gray-700">
                                {coin.price}
                            </p>
                        </div>

                        {/* Mini Chart */}
                        <div className="h-10 w-full min-w-27.5">
                            <svg
                                viewBox="0 0 202 38"
                                className="h-full w-full"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d={coin.chart}
                                    fill="none"
                                    className={coin.chartColor}
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default LiveMarket;