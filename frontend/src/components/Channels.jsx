import { useSelector, useDispatch } from 'react-redux';
import { Nav } from 'react-bootstrap';

import { setCurrentChannelId } from '../store/chatsSlice';
import { ChannelDropdown } from './ChannelDropdown';
import '../index.css';

export const Channels = () => {
  const { channels } = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const { currentChannelId } = useSelector(({ chats }) => chats);

  const handleClick = (channel) => () => {
    dispatch(setCurrentChannelId(channel.id));
  };

  const classes = 'w-100 rounded-0 text-start text-truncate';

  return (
    <Nav fill variant="pills" className="flex-column px-2 overflow-auto mb-3 h-100 d-block">
      {channels.map((channel) => (
        <Nav.Item className="w-100 d-flex" key={channel.id}>
          <Nav.Link
            as="button"
            onClick={handleClick(channel)}
            eventKey={channel.id}
            className={classes}
            active={channel.id === currentChannelId}
          >
            {`# ${channel.name}`}
          </Nav.Link>
          {channel.removable && <ChannelDropdown channel={channel} currentChannelId={currentChannelId} />}
        </Nav.Item>
      ))}
    </Nav>
  );
};
