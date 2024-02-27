import "./index.scss";

const SolSupportsTemplate = ({ header, form, tabs, children }) => {
    return <div className="sol-supports-template">
        <div className="sol-supports-template-header">
            {header}
        </div>
        <div className="sol-supports-template-form">
            {form}
        </div>
        <div className="sol-supports-template-tabs">
            {tabs}
        </div>
        <div className="sol-supports-template-body">
            {children}
        </div>
    </div>
}
export default SolSupportsTemplate