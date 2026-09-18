import logo from "../../assets/cryptx-logo.png";

const menuItems = [
    {name: "Overview", icon: ""},
    {name: "Chart", icon: ""},
    {name: "Transactions", icon: ""},
    {name: "Wallet", icon: ""},
    {name: "Mailbox", icon: ""},
    {name: "Settings", icon: ""},
    {name: "Logout", icon: ""},
]

function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-[162px] bg-[var(--sidebar)] px-6 py-6">
            <div className="mb-10 flex items-center gap-2">
                <img
                    src={logo}
                    alt="CryptX Logo"
                    className="h-5 w-5 object-contain"
                />

                <h1 className="text-lg font-semibold text-gray-900">
                    CryptX
                </h1>
            </div>

            <nav className="flex flex-col gap-6">
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
                            <span className="w-4 text-center">{item.icon}</span>

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