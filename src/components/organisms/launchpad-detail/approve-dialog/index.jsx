import { useState } from "react";
import SolButton from "../../../atoms/button";
import SolModal from "../../../atoms/modal";
import "./index.scss";

const SolLaunchpadDetailApproveDialog = ({ show, projectName, amountSymbol, balance = 0, onClose, onApprove }) => {
    const [amount, setAmount] = useState(0);

    const handleMaxAmount = () => {
        setAmount(Number(balance));
    }

    return <SolModal show={show} className="sol-launchpad-detail-approve-dialog" title={`Join ${projectName} Pool`} onClose={onClose}>
        <div className="sol-form-group">
            <div className="sol-form-label">{amountSymbol} Amount</div>
            <div className="sol-input-amount">
                <input type="number" className="sol-input" placeholder="0.0000" value={amount} onChange={e => setAmount(Number(e.target.value))} />
                <button type="button" className="sol-btn-max" onClick={handleMaxAmount}>Max</button>
            </div>
            <div className="sol-input-amount-balance">
                Your balance: <b>{balance}</b>
            </div>
        </div>
        <SolButton className="w-100" caption="Approve" size="lg" variant="primary" disabled={amount <= 0 || amount > balance} onClick={onApprove} />
    </SolModal>
}
export default SolLaunchpadDetailApproveDialog