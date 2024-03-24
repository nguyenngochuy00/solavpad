import './index.scss';

type Props = {
	className?: string;
	placeholder?: string;
	value?: string;
	readOnly?: boolean;
	disabled?: boolean;
	onChange: (value: string) => void;
};

const SolInput = ({
	className = '',
	placeholder = '',
	value = '',
	readOnly = false,
	disabled = false,
	onChange
}: Props) => {
	return (
		<input
			type="text"
			readOnly={readOnly}
			disabled={disabled}
			className={`'sol-input ${className}`}
			placeholder={placeholder}
			value={value}
			onChange={e => onChange(e.target.value)}
		/>
	);
};
export default SolInput;
