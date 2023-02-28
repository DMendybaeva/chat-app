import { useSelector, useDispatch } from 'react-redux';
import { SplitButton, Dropdown, Nav, Button } from 'react-bootstrap';

import { setCurrentChannelId } from '../slices/chatsSlice';

const Channels = ({ handleRemove, handleRename }) => {
  const { channels } = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const handleClick = (channel) => () => {
    dispatch(setCurrentChannelId(channel.id));
  };
  const { currentChannelId } = useSelector((state) => state.chats);

  const classes = 'w-100 rounded-0 text-start';

  return (
    <Nav fill variant="pills" className="flex-column px-2">
      {channels.map((channel) =>
        !channel.removable ? (
          <Nav.Item className="w-100" key={channel.id}>
            <Button
              variant={currentChannelId === channel.id ? 'secondary' : 'light'}
              className={classes}
              onClick={handleClick(channel)}
            >
              {`# ${channel.name}`}
            </Button>
          </Nav.Item>
        ) : (
          <SplitButton
            size="sm"
            variant={currentChannelId === channel.id ? 'secondary' : 'light'}
            onClick={handleClick(channel)}
            title={`# ${channel.name}`}
            className={classes}
            key={channel.id}
          >
            <Dropdown.Item eventKey="1" onClick={handleRemove(channel)}>
              Удалить
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={handleRename(channel)}>
              Переименовать
            </Dropdown.Item>
          </SplitButton>
        ),
      )}
    </Nav>
  );
};
export default Channels;
