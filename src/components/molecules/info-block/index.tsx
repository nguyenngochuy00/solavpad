import './index.scss';

type SolInfoProps = {
	label?: string;
	value: string | number | undefined;
	value2?: string | number;
	size?: any;
};

const SolInfo: React.FC<SolInfoProps> = ({
	label = '',
	value = '',
	value2 = '',
	size = 'md'
}: SolInfoProps) => {
	return (
		<div className={`sol-info ${size}`}>
			<div className={`sol-info-label`}>{label}</div>
			<div className="sol-info-value">
				{value}
				{value2 ? <div>{value2}</div> : <></>}
			</div>
		</div>
	);
};
export default SolInfo;
