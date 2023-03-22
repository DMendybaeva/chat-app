import { useSelector, useDispatch } from 'react-redux';
import { Nav } from 'react-bootstrap';

import { setCurrentChannelId } from '../store/chatsSlice';
import { ChannelDropdown } from './ChannelDropdown';
import { remove, rename } from '../store/modalsSlice';

export const Channels = () => {
  const { channels } = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  const handleClick = (channel) => () => {
    dispatch(setCurrentChannelId(channel.id));
  };
  const { currentChannelId } = useSelector((state) => state.chats);

  const classes = 'w-100 rounded-0 text-start text-truncate';

  const handleRemove = (channel) => () => {
    dispatch(remove(channel));
  };

  const handleRename = (channel) => () => {
    dispatch(rename(channel));
  };

  return (
    <Nav fill variant="pills" className="flex-column px-2">
      {channels.map((channel) => (
        <Nav.Item className="w-100" key={channel.id} style={{ display: 'flex' }}>
          <Nav.Link
            as="button"
            variant={currentChannelId === channel.id ? 'secondary' : 'light'}
            onClick={handleClick(channel)}
            eventKey={channel.id}
            className={classes}
          >
            {`# ${channel.name}`}
          </Nav.Link>
          {channel.removable && (
            <ChannelDropdown channel={channel} handleRemove={handleRemove} handleRename={handleRename} />
          )}
        </Nav.Item>
      ))}
    </Nav>
  );
};
