import { useSelector } from 'react-redux';

const Channels = () => {
  const { channels } = useSelector((state) => state.channelsReducer);
  return (
    <div className="channels">
      {channels.map((channel) => (
        <div key={channel.id}>{channel.name}</div>
      ))}
    </div>
  );
};
export default Channels;
