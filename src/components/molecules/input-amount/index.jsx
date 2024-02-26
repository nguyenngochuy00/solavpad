import "./index.scss";

const SolInputAmount = ({
    label,
    subLabel,
    placeholder = '0.0001',
    value = '0',
    readOnly,
    note,
    maxValue,
    onChange,
    onClickMax
}) => {
    return <div className="sol-input-amount">
        {label ? <div className="sol-input-amount-label">
            {label}
            {subLabel ? <span className="sol-input-amount-sublabel">{subLabel}</span> : <></>}
        </div> : <></>}
        <div className="sol-input-amount-control">
            <input
                min={0}
                max={maxValue}
                className="sol-input-amount-control-input"
                type="number"
                placeholder={placeholder}
                value={value}
                readOnly={readOnly}
                onChange={e => readOnly ? null : onChange(e.target.value)}
            />
            {
                !readOnly ? <button type="button" className="sol-btn-max" onClick={onClickMax}>
                    Max
                </button> : <></>
            }
        </div>
        {note ? <div className="sol-input-amount-note">{note}</div> : <></>}
    </div>
}
export default SolInputAmount