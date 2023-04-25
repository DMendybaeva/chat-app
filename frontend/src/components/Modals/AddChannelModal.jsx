import { Modal, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import filter from 'leo-profanity';

import { useSocket } from '../../providers/SocketProvider';
import { getChannelValidationSchema } from './getChannelValidationSchema';
import { showSuccessToast } from '../../helpers/showToast';
import { setCurrentChannelId } from '../../store/chatsSlice';

export const AddChannelModal = ({ handleHide }) => {
  const { newChannel } = useSocket();
  const { channels } = useSelector((state) => state.chats);
  const inputEl = useRef(null);
  const { t } = useTranslation();
  const dispath = useDispatch();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    validationSchema: getChannelValidationSchema(channels),
    onSubmit: (values) => {
      const channel = { name: filter.clean(values.channelName) };
      const handleAcknowledgements = ({ status, data }) => {
        if (status === 'ok') {
          const { id } = data;
          dispath(setCurrentChannelId(id));
          showSuccessToast(t('toasts.newChannel'));
          formik.resetForm();
          handleHide();
        } else {
          console.error(status);
        }
      };

      newChannel(channel, handleAcknowledgements);
    },
  });

  return (
    <Modal show onHide={handleHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.addChannelModal.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label visuallyHidden htmlFor="channelName">
              {t('modals.addChannelModal.label')}
            </Form.Label>
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
            <div className="d-flex justify-content-end">
              <Button variant="secondary" type="button" className="me-2" onClick={handleHide}>
                {t('modals.addChannelModal.buttonCancel')}
              </Button>
              <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
                {t('modals.addChannelModal.buttonSend')}
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
