import { useSelector } from 'react-redux';

const Messages = () => {
  const { messages } = useSelector((state) => state.messagesReducer);
  return (
    <div className="channels">
      {messages.map((message) => (
        <div key={message.id}>{message.text}</div>
      ))}
    </div>
  );
};
export default Messages;
