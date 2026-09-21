import logo from "../../assets/cryptx-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTableCellsLarge,
    faChartPie,
    faWallet,
    faEnvelope,
    faGear,
    faRightFromBracket,
    faArrowRightArrowLeft
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
    {name: "Overview", icon: faTableCellsLarge},
    {name: "Chart", icon: faChartPie},
    {name: "Transactions", icon: faArrowRightArrowLeft},
    {name: "Wallet", icon: faWallet},
    {name: "Mailbox", icon: faEnvelope},
    {name: "Settings", icon: faGear},
    {name: "Logout", icon: faRightFromBracket},
]

function Sidebar() {
    return (
        <aside className="relative left-0 top-0 z-20 h-auto w-full bg-[var(--sidebar)] px-4 py-4 lg:fixed lg:h-screen lg:w-40.5 lg:border-b-0 lg:px-6 lg:py-6 lg:bg-[var(--sidebar)]">
            <div className="mb-5 flex items-center gap-2 lg:mb-10">
                <img
                    src={logo}
                    alt="CryptX Logo"
                    className="h-5 w-5 object-contain"
                />

                <h1 className="text-lg font-semibold text-gray-900">
                    CryptX
                </h1>
            </div>

            <nav className="flex flex-row flex-wrap gap-4 lg:flex-col lg:gap-6">
                {menuItems.map((item, index) => {
                    const isActive = index === 0;

                    return (
                        <div 
                            key={item.name}
                            className={`flex items-center gap-4 text-sm ${
                                isActive
                                ? "font-medium text-indigo-500"
                                : "text-gray-400"
                            }`}
                        >
                            <span className="w-4 text-center text-sm">
                                <FontAwesomeIcon icon={item.icon} />
                            </span>

                            <span>{item.name}</span>

                            {isActive && (
                                <span className="ml-auto h-2 w-2 rounded-full bg-indigo-500" />
                            )}
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
}

export default Sidebar;