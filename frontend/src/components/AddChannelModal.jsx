import { Modal, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

import { useSocket } from '../providers/SocketProvider';

export const AddChannelModal = ({ handleHide, show }) => {
  const { newChannel } = useSocket();

  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    onSubmit: (values) => {
      const channel = { name: values.channelName };
      newChannel(channel);
      formik.resetForm();
      handleHide();
      formik.resetForm();
    },
  });

  return (
    <Modal show={show} onHide={handleHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Добавить канал</Modal.Title>
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
