import "./index.scss";
import Modal from 'react-bootstrap/Modal';

const SolModal = ({ show, className, size = 'md', title, children, actions, onClose }) => {
    return <Modal className={`sol-modal ${className}`} show={show} onHide={onClose} size={size} keyboard={false} backdrop="static">
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {actions ? <Modal.Footer>
            {actions}
        </Modal.Footer> : <></>}
    </Modal>
}
export default SolModal