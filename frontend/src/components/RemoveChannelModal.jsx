import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { useSocket } from '../providers/SocketProvider';

export const RemoveChannelModal = ({ modalInfo, handleHide }) => {
  const { removeChannel } = useSocket();
  const channel = modalInfo.modalChannel;
  const { t } = useTranslation();

  const handleClick = (e) => {
    e.preventDefault();
    removeChannel(channel);
    handleHide();
  };

  return (
    <Modal show onHide={handleHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.removeChannelModal.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">{t('modals.removeChannelModal.body')}</p>
        <div className="d-flex justify-content-end">
          <Button variant="secondary" type="button" className="me-2" onClick={handleHide}>
            {t('modals.removeChannelModal.buttonCancel')}
          </Button>
          <Button variant="danger" type="button" onClick={handleClick}>
            {t('modals.removeChannelModal.buttonSend')}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};
