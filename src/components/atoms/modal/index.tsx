import './index.scss';
import Modal from 'react-bootstrap/Modal';

type Props = {
	show?: boolean;
	className?: string;
	size?: 'sm' | 'lg' | 'xl' | undefined;
	title?: string;
	children?: JSX.Element | undefined;
	actions?: boolean;
	onClose?: () => void;
};

const SolModal = ({
	show,
	className,
	size = 'sm',
	title,
	children,
	actions,
	onClose
}: any) => {
	return (
		<Modal
			className={`sol-modal ${className}`}
			show={show}
			onHide={onClose}
			size={size}
			keyboard={false}
			backdrop="static"
		>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			{actions ? <Modal.Footer>{actions}</Modal.Footer> : <></>}
		</Modal>
	);
};
export default SolModal;
