import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faBell,
    faCircleQuestion,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <header className="relative flex h-16 items-center justify-between px-6 after:absolute after:bottom-0 after:left-6 after:right-6 after:border-b after:border-gray-100">
            {/* Search Bar */}
            <div className="flex h-10 w-56 items-center rounded-lg border border-gray-200 px-3">
                <input
                    type="text"
                    placeholder="Search type or Keywords"
                    className="w-full text-xs outline-none placeholder:text-gray-400"
                />

                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-xs text-gray-400"
                />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">
                {/* Notification */}
                <FontAwesomeIcon
                    icon={faBell}
                    className="text-s text-gray-400"
                />

                {/* Help */}
                <FontAwesomeIcon
                    icon={faCircleQuestion}
                    className="text-s text-gray-400"
                />

                {/* Profile */}
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-400"></div>

                    <div className="text-xs">
                        <p className="font-semibold text-gray-900">
                            Laurice
                        </p>
                        <p className="text-gray-400">
                            @Laurice22
                        </p>
                    </div>

                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="text-xs text-gray-400"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;