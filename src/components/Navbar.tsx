import { House } from "lucide-react";

export default function Navbar() {
    return (
        <div className="w-18 min-w-18 h-svh flex flex-col gap-4 items-center py-6 bg-zinc-800 border-r border-zinc-600">
            <a href="#">
                <div>
                    <button className="hover:cursor-pointer">
                        <House size={28} strokeWidth={2} />
                    </button>
                </div>
            </a>
        </div>
    );
}
