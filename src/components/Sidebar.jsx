export default function Sidebar() {
    return(
        <aside className="bg-light p-3 border" style={{ width: "250px" }}>
            <ul className="nav flex-column">
            <li className="nav-item"><a href="https://react.dev/" className="nav-link">React</a></li>
            <li className="nav-item"><a href="https://getbootstrap.com/" className="nav-link">Bootstrap</a></li>
            <li className="nav-item"><a href="https://github.com/facebook/react" className="nav-link">Git React</a></li>
            </ul>
        </aside>
        
    );
}