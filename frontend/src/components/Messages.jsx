import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const Messages = () => {
  const { messages } = useSelector((state) => state.chats);
  const { currentChannelId } = useSelector((state) => state.chats);
  const { t } = useTranslation();

  return (
    <div id="messages-box" className="chat-messages overflow-auto px-5 ">
      {messages
        .filter((message) => message.channelId === currentChannelId)
        .map((message) => (
          <div className="text-break mb-2" key={message.id}>
            <b>{t('pages.homePage.messages.messageUsername', { username: message.username })}</b>
            {t('pages.homePage.messages.messageText', { text: message.text })}
          </div>
        ))}
    </div>
  );
};
