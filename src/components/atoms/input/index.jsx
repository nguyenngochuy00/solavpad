import "./index.scss";

const SolInput = ({
    className = '',
    placeholder = '',
    value = '',
    readOnly = false,
    disabled = false,
    onChange
}) => {
    return <input type="text" readOnly={readOnly} disabled={disabled} className={`'sol-input ${className}`} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} />
}
export default SolInput