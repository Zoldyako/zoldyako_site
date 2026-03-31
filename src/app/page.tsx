import Image from "next/image";
import Profile_pic from "@/assets/images/profile_pic.webp"

export default function Home() {
    return (
        <div className="py-4 px-8 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl">Hello world, I'm José!</h1>
                <p>
                    You'll not believe this but I'm... A full-stack web-developer!
                    <br></br>Almost finished with university :)
                </p>
            </div>
            <div>
                <h2 className="text-3xl pb-2">What's my stack?</h2>
                <ul>
                    <li>🟆 JavaScript / TypeScript</li>
                    <li>🟆 Next.js + Node.js</li>
                    <li>🟆 Tailwind</li>
                    <li>🟆 Express.js </li>
                    <li>🟆 Expanding!</li>
                </ul>
            </div>
            <div className="">
                <h2 className="text-3xl pb-2">What have I built?</h2>
                <ul>
                    <li>🟆 This site</li>
                    <li>🟆 Future things here :)</li>
                </ul>
            </div>
        </div>
    );
}
