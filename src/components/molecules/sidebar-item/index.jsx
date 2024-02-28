import "./index.scss";

const SolSidebarItem = ({
    icon,
    text,
    disabled = false,
    active,
    onClick
}) => {
    return <div className={`sol-sidebar-item-wrap ${active ? 'active' : ''}`}>
        <button type="button" disabled={disabled} className="sol-sidebar-item" onClick={onClick}>
            <span className="sol-sidebar-item-icon">
                {icon}
            </span>
            {text ? <span className="sol-sidebar-item-text">{text}</span> : <></>}
        </button>
    </div>
}
export default SolSidebarItem