import './index.scss';

type Props = {
	text: string;
	active: boolean;
	disabled?: boolean;
	onClick: () => void;
};

const SolTab = ({ text, active, disabled = false, onClick }: Props) => {
	return (
		<button
			disabled={disabled}
			type="button"
			className={`sol-tab ${active ? 'active' : ''}`}
			onClick={onClick}
		>
			<span>{text}</span>
		</button>
	);
};
export default SolTab;
