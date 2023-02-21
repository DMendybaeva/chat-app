import { useSelector } from 'react-redux';

const Messages = () => {
  const { messages } = useSelector((state) => state.chats);
  const { currentChannelId } = useSelector((state) => state.chats);
  return (
    <div id="messages-box" className="chat-messages overflow-auto px-5 ">
      {messages
        .filter((message) => message.channelId === currentChannelId)
        .map((message) => (
          <div className="text-break mb-2" key={message.messageId}>
            <b>{message.username}</b>: {message.body}
          </div>
        ))}
    </div>
  );
};
export default Messages;
