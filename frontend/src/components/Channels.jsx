import { useSelector, useDispatch } from 'react-redux';
import { setCurrentChannelId } from '../slices/channelsSlice';

const Channels = () => {
  const { channels } = useSelector((state) => state.channels);
  const dispatch = useDispatch();
  const handleClick = (channel) => () => {
    dispatch(setCurrentChannelId(channel.id));
  };

  return (
    <ul className="nav flex-column nav-pills nav-fill px-2">
      {channels.map((channel) => (
        <li className="nav-item w-100" key={channel.id}>
          <button type="button" className="w-100 rounded-0 text-start btn btn-secondary" onClick={handleClick(channel)}>
            <span className="me-1">#</span>
            {channel.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Channels;
