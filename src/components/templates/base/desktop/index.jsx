import { Outlet } from "react-router-dom";
import "./index.scss";

const SolDesktopTemplate = ({ sidebar, header }) => {
    return <div className="sol-desktop-template">
        {sidebar}
        <main className="sol-main">
            {header}
            <Outlet />
        </main>
    </div>
}
export default SolDesktopTemplate