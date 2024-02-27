import "./index.scss";

const SolAvailableOn = ({
    telegram,
    twitter,
    webURL,
    size = 'md',
    className = ''
}) => {
    return <div className={`sol-available-on ${size} ${className}`}>
        <span>Available on:</span>
        {telegram ? <a href={telegram} target="_blank" rel="noreferrer" >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.8889 2.61913C17.5999 2.58848 17.2858 2.63361 16.9701 2.7584C16.5788 2.91231 10.4473 5.49158 4.73165 7.89766L2.84307 8.6925C2.11176 8.98902 1.74252 9.47126 1.74252 10.1208C1.74252 10.5756 1.935 11.1925 2.85326 11.556L6.0411 12.8331C6.31675 13.6601 6.95699 15.5802 7.11786 16.0906C7.21352 16.3932 7.45512 17.1555 8.06555 17.3338C8.19077 17.3764 8.32144 17.3983 8.45448 17.3983C8.8397 17.3983 9.11706 17.2191 9.25271 17.1147L11.2789 15.4011L13.7398 17.6769C13.8346 17.7734 14.3363 18.2611 15.0102 18.2611C15.8511 18.2611 16.4889 17.5611 16.6219 16.8837C16.6941 16.5124 19.0676 4.59769 19.0676 4.59943C19.2806 3.64378 18.8976 3.14803 18.6515 2.93672C18.4406 2.75629 18.1779 2.64978 17.8889 2.61913ZM17.3132 4.49753C16.9853 6.141 15.1983 15.1118 14.927 16.4048L11.3298 13.0777L8.88926 15.1446L9.56521 12.5002C9.56521 12.5002 14.2283 7.78012 14.5092 7.50534C14.7353 7.28534 14.7826 7.20822 14.7826 7.1317C14.7826 7.02996 14.7302 6.95677 14.6094 6.95677C14.5007 6.95677 14.3531 7.06092 14.2748 7.10962C13.2806 7.72946 9.04703 10.1413 6.96331 11.3267L3.94021 10.1191L5.4076 9.50262C9.14587 7.92871 15.8036 5.12535 17.3132 4.49753Z" fill="currentColor" />
            </svg>
        </a> : <></>}
        {twitter ? <a href={twitter} target="_blank" rel="noreferrer" >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2033 1.875H17.96L11.9375 8.75833L19.0225 18.125H13.475L9.13001 12.4442L4.15835 18.125H1.40001L7.84168 10.7625L1.04501 1.875H6.73335L10.6608 7.0675L15.2033 1.875ZM14.2358 16.475H15.7633L5.90335 3.43833H4.26418L14.2358 16.475Z" fill="currentColor" />
            </svg>
        </a> : <></>}
        {webURL ? <a href={webURL} target="_blank" rel="noreferrer" >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99999 18.3332C14.6024 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6024 1.6665 9.99999 1.6665C5.39762 1.6665 1.66666 5.39746 1.66666 9.99984C1.66666 14.6022 5.39762 18.3332 9.99999 18.3332Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.66667 2.5H7.5C5.875 7.36667 5.875 12.6333 7.5 17.5H6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.5 2.5C14.125 7.36667 14.125 12.6333 12.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 13.3333V12.5C7.36667 14.125 12.6333 14.125 17.5 12.5V13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 7.5C7.36667 5.875 12.6333 5.875 17.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a> : <></>}
    </div>
}
export default SolAvailableOn