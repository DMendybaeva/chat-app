import { useSelector } from 'react-redux';

const Channels = () => {
  const { channels } = useSelector((state) => state.channelsReducer);
  return (
    <ul className="nav flex-column nav-pills nav-fill px-2">
      {channels.map((channel) => (
        <li className="nav-item w-100" key={channel.id}>
          <button type="button" className="w-100 rounded-0 text-start btn btn-secondary">
            <span className="me-1">#</span>
            {channel.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Channels;
