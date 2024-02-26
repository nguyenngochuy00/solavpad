import "./index.scss";

const SolTab = ({ text, active, disabled = false, onClick }) => {
    return <button disabled={disabled} type="button" className={`sol-tab ${active ? 'active' : ''}`} onClick={onClick}>
        <span>{text}</span>
    </button>
}
export default SolTab