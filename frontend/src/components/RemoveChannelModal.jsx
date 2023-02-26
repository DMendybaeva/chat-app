import { Modal, Button } from 'react-bootstrap';
import { useSocket } from '../providers/SocketProvider';

export const RemoveChannelModal = ({ modalInfo, handleHide }) => {
  const { removeChannel } = useSocket();
  const channel = modalInfo.modalChannel;

  const handleClick = (e) => {
    e.preventDefault();
    removeChannel(channel);
    handleHide();
  };

  return (
    <Modal show onHide={handleHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Удалить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">Уверены?</p>
        <div className="d-flex justify-content-end">
          <Button variant="secondary" type="button" className="me-2" onClick={handleHide}>
            Отменить
          </Button>
          <Button variant="danger" type="button" onClick={handleClick}>
            Удалить
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
