import { Modal, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import { useSocket } from '../providers/SocketProvider';
import { AddChannelSchema } from '../validation/validation';

export const RenameChannelModal = ({ modalInfo, handleHide }) => {
  const { renameChannel } = useSocket();
  const { channels } = useSelector((state) => state.chats);
  const oldChannel = modalInfo.modalChannel;

  const formik = useFormik({
    initialValues: {
      channelName: oldChannel.name,
    },
    validationSchema: AddChannelSchema(channels),
    onSubmit: (values) => {
      const newChannel = { id: oldChannel.id, name: values.channelName };
      renameChannel(newChannel);
      formik.resetForm();
      handleHide();
    },
  });

  return (
    <Modal show onHide={handleHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Переименовать канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Control
              data-testid="input-body"
              id="channelName"
              name="channelName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.channelName}
              isInvalid={formik.errors.channelName}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.channelName}</Form.Control.Feedback>
            <Form.Label visuallyHidden htmlFor="channelName">
              Имя канала
            </Form.Label>
            <div className="invalid-feedback" />
            <div className="d-flex justify-content-end">
              <Button variant="secondary" type="button" className="me-2" onClick={handleHide}>
                Отменить
              </Button>
              <Button variant="primary" type="submit">
                Отправить
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
