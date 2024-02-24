import "./index.scss";

const SolItemCard = ({ disabled, icon, text, rightIcon, onClick }) => {
    return <button type="button" className="sol-item-card" disabled={disabled} onClick={onClick}>
        {
            icon ? <span className="sol-item-card-icon">{icon}</span> : <></>
        }
        <span className="sol-item-card-text">{text}</span>
        {
            rightIcon ? <span className="sol-item-card-right-icon">{rightIcon}</span> : <></>
        }
    </button>
}
export default SolItemCard