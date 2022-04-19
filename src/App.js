import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
            <div className="center">
                <Navbar />
            </div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default App;