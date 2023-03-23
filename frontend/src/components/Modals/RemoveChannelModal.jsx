import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { useSocket } from '../../providers/SocketProvider';
import { showSuccessToast } from '../../helpers/showToast';

export const RemoveChannelModal = ({ modalInfo, handleHide }) => {
  const { removeChannel } = useSocket();
  const channel = modalInfo.modalChannel;
  const { t } = useTranslation();

  const handleClick = (e) => {
    e.preventDefault();
    removeChannel(channel);
    showSuccessToast(t('toasts.remove'));
    handleHide();
  };

  return (
    <Modal show onHide={handleHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.removeChannelModal.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">{t('modals.removeChannelModal.body')}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="button" className="me-2" onClick={handleHide}>
          {t('modals.removeChannelModal.buttonCancel')}
        </Button>
        <Button variant="danger" type="button" onClick={handleClick}>
          {t('modals.removeChannelModal.buttonSend')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
