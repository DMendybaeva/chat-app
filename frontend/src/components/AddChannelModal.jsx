import { Modal, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import { useSocket } from '../providers/SocketProvider';
import { AddChannelSchema } from '../validation/validation';

export const AddChannelModal = ({ handleHide }) => {
  const { newChannel } = useSocket();
  const { channels } = useSelector((state) => state.chats);

  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    validationSchema: AddChannelSchema(channels),
    onSubmit: (values) => {
      const channel = { name: values.channelName };
      newChannel(channel);
      formik.resetForm();
      handleHide();
    },
  });

  return (
    <Modal show onHide={handleHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Добавить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label visuallyHidden htmlFor="channelName">
              Имя канала
            </Form.Label>
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
            <div className="d-flex justify-content-end">
              <Button variant="secondary" type="button" className="me-2" onClick={handleHide}>
                Отменить
              </Button>
              <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
                Отправить
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
