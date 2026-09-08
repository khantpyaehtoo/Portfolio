import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 text-center">
            {/* Background Light Glow Effect */}
            <div className="absolute w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-xl w-full">
                <span className="font-mono text-amber-300 text-sm uppercase tracking-widest">
                    {" // 404 Error"}
                </span>

                <h1 className="text-6xl md:text-7xl font-bold tracking-tight w-full">
                    Page Not Found
                </h1>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Oops!
                </p>

                <div className="pt-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-amber-300 hover:bg-amber-400 text-black font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-amber-300/20 active:scale-95"
                    >
                        <span>Back to Home</span>
                        <i className="fa-solid fa-arrow-right text-xs" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
