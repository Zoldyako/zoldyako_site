import Image from "next/image";

export default function Home() {
    return (
        <div className="py-4 px-8">
            <p>hello world</p>
            <Image
                height={100}
                width={100}
                src="https://placehold.co/100x100/png"
                alt="placeholder"
            />
        </div>
    );
}
