import Image from "next/image";

export default function Home() {
    return (
        <div className="py-4 px-8 flex flex-col gap-8">
            <div className="border border-zinc-600">
                <h1 className="text-4xl">hello world, I'm José!</h1>
                <p>Full-Stack Web Developer</p>
                <Image
                    height={256}
                    width={256}
                    src="https://placehold.co/256x256/png"
                    loading="lazy"
                    alt="placeholder"
                />
            </div>
            <div className="border border-zinc-600">
                <h2 className="text-3xl">What's my stack?</h2>
                <ul>
                    <li> - JavaScript / TypeScript</li>
                    <li> - Next.js + Tailwind</li>
                    <li> - Node.js</li>
                </ul>
            </div>
            <div className="border border-zinc-600">
                <h2>What have I built?</h2>
                <ul>
                    <li> - This site</li>
                </ul>
            </div>
        </div>
    );
}
