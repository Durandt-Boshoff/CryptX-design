function ChartVisual(){
    return (
        <div className="relative mt-6 h-57.5 w-full">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 flex h-45 flex-col justify-between text-[10px] text-gray-400">
                <span>$800</span>
                <span>$600</span>
                <span>$400</span>
                <span>$200</span>
                <span>0</span>
            </div>

            {/* Chart area */}
            <div className="absolute left-10 right-0 top-0 h-45">
                <svg
                    viewBox="0 0 300 180"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                >
                    {/* Main line */}
                    <path
                        d="
                            M 0 65
                            C 25 65, 35 25, 65 25
                            C 95 25, 105 60, 140 65
                            C 170 70, 175 45, 200 45
                            C 225 45, 220 95, 245 95
                            C 270 95, 260 25, 300 20
                        "
                        fill="none"
                        stroke="#5B4DF6"
                        strokeWidth="2"
                    />

                    {/* Highlight line */}
                    <line
                        x1="125"
                        y1="65"
                        x2="125"
                        y2="180"
                        stroke="#D9D6FF"
                        strokeWidth="18"
                    />

                    {/* Highlight dot */}
                    <circle
                        cx="125"
                        cy="65"
                        r="4"
                        fill="#5B4DF6"
                    />
                </svg>

                {/* Price bubble */}
                <div className="absolute left-[37%] top-[38%] -translate-x-1/2 rounded-md bg-indigo-500 px-3 py-1 text-xs text-white">
                    $25,240
                </div>

                {/* Bottom axis */}
                <div className="absolute -bottom-7.5 left-0 right-0 border-t border-gray-200">
                    <div className="mt-4 flex justify-between text-[10px] text-gray-400">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                        <span>Jul</span>
                        <span>Sep</span>
                        <span>Nov</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartVisual;