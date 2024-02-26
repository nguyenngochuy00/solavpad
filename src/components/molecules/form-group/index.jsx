import "./index.scss";

const SolFormGroup = ({
    label = '',
    leftIcon = '',
    rightIcon = '',
    type = 'text',
    placeholder = '',
    value = '',
    note = '',
    readOnly = false,
    onClick = () => { },
    onChange = () => { }
}) => {
    return <div className="sol-form-group">
        {label ? <div className="sol-form-label">{label}</div> : <></>}
        <div className={`sol-form-control ${leftIcon ? 'with-left-icon' : ''} ${rightIcon ? 'with-right-icon' : ''}`}>
            {leftIcon ? <span className={`sol-form-control-icon left ${leftIcon === '...' ? 'default' : ''}`}>{leftIcon}</span> : <></>}
            {rightIcon ? <span className="sol-form-control-icon right">{rightIcon}</span> : <></>}
            <input
                className="sol-form-control-input"
                type={type}
                placeholder={placeholder}
                value={value}
                readOnly={readOnly}
                onClick={() => readOnly ? onClick() : null}
                onChange={e => readOnly ? null : onChange(e.target.value)}
            />
        </div>
        {note ? <div className="sol-form-group-note">{note}</div> : <></>}
    </div>
}
export default SolFormGroup