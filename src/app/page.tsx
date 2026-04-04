"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const date = new Date();
    const [time, set_time] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            set_time((prevTime) => ({
                ...prevTime,
                hours: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds(),
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const { hours, minutes, seconds } = time;

    return (
        <div className="py-4 px-8 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl">Hello world, I'm José!</h1>
                <p>
                    You'll not believe this but I'm... A full-stack
                    web-developer!
                    <br></br>Almost finished with university :)
                </p>
                <div>
                    <h2 className="text-3xl pb-2">My links:</h2>
                    <ul>
                        <li>
                            🟆{" "}
                            <a
                                href="https://github.com/Zoldyako"
                                target="_blank"
                                className="underline text-amber-300 hover:text-amber-100"
                            >
                                Github
                            </a>
                        </li>
                        <li>
                            🟆{" "}
                            <a
                                href="https://www.linkedin.com/in/jose-vdr/"
                                target="_blank"
                                className="underline text-amber-300 hover:text-amber-100"
                            >
                                Linkedin
                            </a>
                        </li>
                    </ul>
                </div>
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
            <div>
                <h2 className="text-3xl pb-2">What have I built?</h2>
                <ul>
                    <li>🟆 This site</li>
                    <li>🟆 Future things here :)</li>
                </ul>
            </div>
            <div>
                <h2 className="text-3xl pb-2">Time</h2>
                <p>
                    🟆 {hours < 10 ? "0" + hours : hours}:
                    {minutes < 10 ? "0" + minutes : minutes}:
                    {seconds < 10 ? "0" + seconds : seconds}
                </p>
            </div>
        </div>
    );
}
