import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAnglesUp,
    faAnglesDown,
} from "@fortawesome/free-solid-svg-icons";

const transactions = [
    {
        name: "Ethereum",
        action: "Received",
        amount: "$24,102",
        time: "Today, 19:30",
        positive: true,
        icon: faAnglesUp,
    },
    {
        name: "Bitcoin",
        action: "Buy",
        amount: "$4,157",
        time: "Today, 14:32",
        positive: false,
        icon: faAnglesDown,
    },
    {
        name: "Bitcoin",
        action: "Buy",
        amount: "$64,784",
        time: "Today, 13:50",
        positive: false,
        icon: faAnglesDown,
    },
    {
        name: "Litecoin",
        action: "Buy",
        amount: "$14,265",
        time: "Today, 09:38",
        positive: false,
        icon: faAnglesDown,
    },
];

function TransactionTable() {
    return (
        <section>
            <h2 className="mb-5 text-lg font-semibold text-gray-900">
                Transactions
            </h2>

            <div className="flex flex-col gap-6">
                {transactions.map((transaction, index) => (
                    <div
                        key={`${transaction.name}-${index}`}
                        className="flex items-center justify-between gap-4"
                    >
                        {/* Left side */}
                        <div className="flex items-center gap-4">
                            <div 
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 ${
                                    transaction.positive
                                        ? "text-green-500"
                                        : "text-orange-400"
                                }`}
                            >
                                {/* Font Awesome icon later */}
                                <FontAwesomeIcon icon={transaction.icon} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-gray-800">
                                    {transaction.name}
                                </p>

                                <p className="mt-1 text-xs text-gray-400">
                                    {transaction.action}
                                </p>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="text-right">
                            <p className="text-sm font-semibold text-gray-900">
                                {transaction.amount}
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                                {transaction.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TransactionTable