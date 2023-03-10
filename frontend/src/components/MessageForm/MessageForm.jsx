import { useFormik } from 'formik';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import filter from 'leo-profanity';

import { useSocket } from '../../providers/SocketProvider';
import { useAuth } from '../../providers/AuthProvider/useAuth';
import { getMessageValidation } from '../../validation/getMessageValidation';

export const MessageForm = () => {
  const { t } = useTranslation();
  const { newMessage } = useSocket();
  const { getUserInfo } = useAuth();
  const { currentChannelId } = useSelector((state) => state.chats);

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: getMessageValidation(),
    onSubmit: ({ text }) => {
      const { username } = getUserInfo();
      const message = { channelId: currentChannelId, text: filter.clean(text), username };
      newMessage(message);
      formik.resetForm();
    },
  });

  return (
    <Form noValidate="" className="py-1 border rounded-2" onSubmit={formik.handleSubmit}>
      <InputGroup className="has-validation">
        <Form.Control
          name="text"
          aria-label={t('forms.messageForm.label')}
          placeholder={t('forms.messageForm.placeholder')}
          className="border-0 p-0 ps-2"
          value={formik.values.text}
          onChange={formik.handleChange}
        />
        <Button type="submit" disabled="" className="btn btn-group-vertical">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
          <span className="visually-hidden">{t('forms.messageForm.sendMessageButton')}</span>
        </Button>
      </InputGroup>
    </Form>
  );
};
