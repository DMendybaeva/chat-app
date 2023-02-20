import { useSelector } from 'react-redux';

const Messages = () => {
  const { messages } = useSelector((state) => state.messagesReducer);
  return (
    <div id="messages-box" className="chat-messages overflow-auto px-5 ">
      {messages.map((message) => (
        <div className="text-break mb-2" key={message.id}>
          <b>{message.id}</b>: {message.text}
        </div>
      ))}
    </div>
  );
};
export default Messages;
