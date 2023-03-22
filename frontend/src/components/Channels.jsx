import { useSelector, useDispatch } from 'react-redux';
import { SplitButton, Dropdown, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { setCurrentChannelId } from '../store/chatsSlice';

export const Channels = ({ handleRemove, handleRename }) => {
  const { channels } = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
              {t('pages.homePage.channels.channelName', { channelName: channel.name })}
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
              {t('pages.homePage.channels.dropdownButtonDelete')}
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={handleRename(channel)}>
              {t('pages.homePage.channels.dropdownButtonRename')}
            </Dropdown.Item>
          </SplitButton>
        ),
      )}
    </Nav>
  );
};
