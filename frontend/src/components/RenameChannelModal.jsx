import { Modal, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useSocket } from '../providers/SocketProvider';
import { getChannelValidationSchema } from '../validation/getChannelValidationSchema';

export const RenameChannelModal = ({ modalInfo, handleHide }) => {
  const { renameChannel } = useSocket();
  const { channels } = useSelector((state) => state.chats);
  const inputEl = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      channelName: modalInfo.modalChannel.name,
    },
    validationSchema: getChannelValidationSchema(channels),
    onSubmit: (values) => {
      const newChannel = { id: modalInfo.modalChannel.id, name: values.channelName };
      renameChannel(newChannel);
      formik.resetForm();
      handleHide();
    },
  });

  return (
    <Modal show onHide={handleHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.renameChannelModal.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Control
              data-testid="input-body"
              id="channelName"
              name="channelName"
              type="text"
              ref={inputEl}
              onChange={formik.handleChange}
              value={formik.values.channelName}
              isInvalid={formik.errors.channelName}
            />
            <Form.Control.Feedback type="invalid">{t(formik.errors.channelName)}</Form.Control.Feedback>
            <Form.Label visuallyHidden htmlFor="channelName">
              {t('modals.renameChannelModal.label')}
            </Form.Label>
            <div className="invalid-feedback" />
            <div className="d-flex justify-content-end">
              <Button variant="secondary" type="button" className="me-2" onClick={handleHide}>
                {t('modals.renameChannelModal.buttonCancel')}
              </Button>
              <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
                {t('modals.renameChannelModal.buttonSend')}
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
