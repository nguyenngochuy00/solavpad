import SolButton from "src/components/atoms/button";
import SolBreadcrumb from "src/components/molecules/breadcrumb";
import "./index.scss";

const SolHeader = ({ breadcrumbs, onClickConnectWallet, onClickWallet }) => {
    return <div className="sol-header">
        <SolBreadcrumb
            items={breadcrumbs}
        />
        <div className="sol-header-right">
            <SolButton caption="Connect wallet" variant="primary" icon={
                <img src="/images/icons/wallet.svg" alt='' />
            } onClick={onClickConnectWallet} />
            <SolButton caption="0x23323...42323" variant="primary" icon={
                <img src="/images/icons/wallet.svg" alt='' />
            } onClick={onClickWallet} />
            <SolButton caption="Disconnect" />
        </div>
    </div>
}
export default SolHeader