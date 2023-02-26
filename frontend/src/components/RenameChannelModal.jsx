import { Modal, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

import { useSocket } from '../providers/SocketProvider';

export const RenameChannelModal = ({ modalInfo, handleHide }) => {
  const { renameChannel } = useSocket();
  const oldChannel = modalInfo.modalChannel;

  const formik = useFormik({
    initialValues: {
      updatedChannelName: oldChannel.name,
    },
    onSubmit: (values) => {
      const newChannel = { id: oldChannel.id, name: values.updatedChannelName };
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
              id="updatedChannelName"
              name="updatedChannelName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.updatedChannelName}
              autoFocus
            />
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
