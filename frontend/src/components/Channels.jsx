import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { SplitButton, Dropdown, Nav, Button } from 'react-bootstrap';

import { setCurrentChannelId } from '../slices/chatsSlice';

const Channels = ({ handleRemove }) => {
  const { channels } = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const handleClick = (channel) => () => {
    dispatch(setCurrentChannelId(channel.id));
  };
  const { currentChannelId } = useSelector((state) => state.chats);
  const getVariant = (id) => (currentChannelId === id ? 'secondary' : 'light');
  const classes = cn('w-100', 'rounded-0', 'text-start');
  const getChannelName = (name) => `# ${name}`;

  return (
    <Nav fill variant="pills" className="flex-column px-2">
      {channels.map((channel) => {
        if (!channel.removable) {
          return (
            <Nav.Item className="w-100" key={channel.id}>
              <Button variant={getVariant(channel.id)} className={classes} onClick={handleClick(channel)}>
                {getChannelName(channel.name)}
              </Button>
            </Nav.Item>
          );
        }
        return (
          <SplitButton
            size="sm"
            variant={getVariant(channel.id)}
            onClick={handleClick(channel)}
            title={getChannelName(channel.name)}
            className={classes}
          >
            <Dropdown.Item eventKey="1" onClick={handleRemove(channel)}>
              Удалить
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">Переименовать</Dropdown.Item>
          </SplitButton>
        );
      })}
    </Nav>
  );
};
export default Channels;
