import { Link, Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Main