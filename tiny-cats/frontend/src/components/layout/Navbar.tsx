
const Navbar = () => {
    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <h1 className="text-2xl font-bold">Tiny Cats</h1>
                <ul className="flex items-center gap-8">
                    <li><a href="/">Home</a></li>
                    <li><a href="/create-cat">Create Cat</a></li>
                    <li><a href="/cats">Cats</a></li>
                    <li><a href="/ask-ai">Ask AI</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar