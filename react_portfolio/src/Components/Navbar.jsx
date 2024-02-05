
export default function Navbar() {
  return (
    <>
    <nav>
        <div className="logo">
            STANLEY
        </div>
        <div className="navbar">
            <ul>
                <li><a href="#home" className="active">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#work">work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}
