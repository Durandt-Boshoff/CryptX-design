import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import LiveMarket from "../ui/LiveMarket";
import TransactionTable from "../ui/TransactionTable";

const cryptoData = [
    {
        symbol: "Bitcoin - BTC",
        price: "$40,291",
        change: "+0.25%",
    },
    {
        symbol: "Ethereum - ETH",
        price: "$18,291",
        change: "+0.25%",
    },
    {
        symbol: "Litecoin - LTC",
        price: "$8,291",
        change: "+0.25%",
    },
    {
        symbol: "Cardano - ADA",
        price: "$3,291",
        change: "-2.05%",
    },
];

function MainContent() {
    return (
        <section className="px-6 py-6">
            {/* Top Dashboard Section */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                {/* Left: Metric Cards */}
                <div className="grid grid-cols-2 gap-5">
                    {cryptoData.map((crypto) => (
                        <MetricCard
                            key={crypto.symbol}
                            name={crypto.name}
                            symbol={crypto.symbol}
                            price={crypto.price}
                            change={crypto.change}
                        />
                    ))}
                </div>

                {/* Right: BTC Chart */}
                <div className="rounded-xl bg-white p-5 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900">
                        BTC Prices
                    </h2>

                    <ChartVisual />
                </div>

            </div>

            {/* Bottom Dashboard Section */}
            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.8fr_1fr]">
                <LiveMarket />
                <TransactionTable />
            </div>
        </section>
    );
}

export default MainContent;