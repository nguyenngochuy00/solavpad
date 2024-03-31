import { useMemo } from 'react';
import Countdown from 'react-countdown';
import { renderCountDownOpen } from '../../organisms/common/pool-card';
import './index.scss';

type SolInfoProps = {
	label?: string;
	value: string | number | undefined;
	value2?: string | number;
	size?: any;
	isCountDown?: boolean;
	onCompleteFc?: VoidFunction
};

const SolInfo: React.FC<SolInfoProps> = ({
	label = '',
	value = '',
	value2 = '',
	size = 'md',
	isCountDown = false,
	onCompleteFc
}: SolInfoProps) => {
	const onComplete = () => {
		if(onCompleteFc && isCountDown) {
			onCompleteFc();
		}
	};
	return (
		<div className={`sol-info ${size}`}>
			<div
				className={`sol-info-label`}
				dangerouslySetInnerHTML={{ __html: label }}
			/>
			{isCountDown ? (
				value && value != 0 && (
					<Countdown
						date={new Date(Number(value) * 1000 || 0)}
						intervalDelay={1}
						precision={3}
						renderer={renderCountDownOpen}
						onComplete={onComplete}
						autoStart
					/>
				)
			) : (
				<div className="sol-info-value">
					{value}
					{value2 ? <div>{value2}</div> : <></>}
				</div>
			)}
		</div>
	);
};
export default SolInfo;
