export default function Sidebar() {
    return (
        <div className="h-full w-64 py-4 flex flex-col justify-start items-center gap-8 bg-zinc-700 border-r border-zinc-600">
            <h2 className="text-4xl font-bold">Zoldyako</h2>
            <ul className="flex flex-col gap-2 w-full">
                <a href="#"><li className="h-10 bg-zinc-500 py-2 px-4">Button Placeholder</li></a>
                <a href="#"><li className="h-10 bg-zinc-500 py-2 px-4">Button Placeholder</li></a>
                <a href="#"><li className="h-10 bg-zinc-500 py-2 px-4">Button Placeholder</li></a>
                <a href="#"><li className="h-10 bg-zinc-500 py-2 px-4">Button Placeholder</li></a>
            </ul>
        </div>
    )
}
