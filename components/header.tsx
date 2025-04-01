import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="https://vineetloyer.github.io/VineetKumarLoyer/" className="text-2xl font-bold">
          Vineet Kumar Loyer
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="hover:text-indigo-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-indigo-400 transition-colors">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-indigo-400 transition-colors">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-indigo-400">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

