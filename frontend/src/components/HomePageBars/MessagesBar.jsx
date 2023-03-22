import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Messages } from '../Messages';
import { MessageForm } from '../MessageForm/MessageForm';

export const MessagesBar = () => {
  const { t } = useTranslation();
  const { currentChannelId, channels, messages } = useSelector((state) => state.chats);

  const currentChannel = channels.find((channel) => channel.id === currentChannelId);
  const messagesCount = messages.filter((message) => message.channelId === currentChannelId).length;

  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div className="bg-light mb-4 p-3 shadow-sm small">
          <p className="m-0">
            <b>{t('pages.homePage.channels.currentChannel', { currentChannelName: currentChannel?.name })}</b>
          </p>
          <span className="text-muted">
            {t('pages.homePage.messages.messagesCount.key', { count: messagesCount, messagesCount })}
          </span>
        </div>
        <Messages />
        <div className="mt-auto px-5 py-3">
          <MessageForm />
        </div>
      </div>
    </div>
  );
};
