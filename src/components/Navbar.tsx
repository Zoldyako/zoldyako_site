import Image from "next/image";

export default function Navbar() {
    return (
        <div className="w-18 h-full flex flex-col gap-4 items-center py-4 bg-zinc-800 border-r border-zinc-600">
            <a href="#">
                <div>
                    <Image
                        width={48}
                        height={48}
                        src="https://placehold.co/48x48/png"
                        alt="placeholder"
                        className="rounded"
                    />
                </div>
            </a>
        </div>
    );
}
