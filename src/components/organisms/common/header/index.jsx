import SolButton from "../../../atoms/button";
import SolBreadcrumb from "../../../molecules/breadcrumb";
import "./index.scss";

const SolHeader = () => {
    return <div className="sol-header">
        <SolBreadcrumb />
        <div className="sol-header-right">
            <SolButton caption="0x23323...42323" variant="primary" icon={
                <img src="/images/icons/wallet.svg" alt='' />
            } />
            <SolButton caption="Disconnect" />
        </div>
        <SolButton />
    </div>
}
export default SolHeader