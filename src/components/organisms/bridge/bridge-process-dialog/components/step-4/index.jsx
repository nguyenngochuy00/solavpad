import "./index.scss";

const SolBridgeProcessStep4 = ({ status, symbol, fromNetwork }) => {
    return <div className="sol-bridge-process-step4">
        <div className="sol-bridge-process-title">Swap Submitted</div>
        {status === 'pending' ? <>
            <div className="sol-bridge-process-note">
                <img src="/images/icons/warning.svg" alt="" />
                <span>Please wait below for the completed swap transaction receipt from the {fromNetwork}.</span>
            </div>
            <div className="sol-bridge-process-description mt-3">
                <p>
                    The swap process can take several minutes. If you do not receive a transaction receipt please contact us for further support.
                </p>
            </div>
        </> : <></>}

        {status === 'completed' ?
            <div className="sol-bridge-process-note success">
                <img src="/images/icons/success.svg" alt="" />
                <span>{symbol} token swapped successfully!</span>
            </div> : <></>
        }

        {status === 'fail' ?
            <div className="sol-bridge-process-note error">
                <img src="/images/icons/error.svg" alt="" />
                <span>{symbol} token swapped fails!</span>
            </div> : <></>
        }
    </div>
}
export default SolBridgeProcessStep4