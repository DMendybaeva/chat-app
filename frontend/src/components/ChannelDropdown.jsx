import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';

export const ChannelDropdown = ({ channel, handleRemove, handleRename }) => {
  const { t } = useTranslation();
  const { currentChannelId } = useSelector(({ chats }) => chats);

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant={channel.id === currentChannelId ? 'secondary' : 'light'}
        className="rounded-0 h-100 border-0"
        // style={{ marginLeft: -1 }}
      >
        <span className="visually-hidden">{t('pages.home.dropdown')}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="1" onClick={handleRemove(channel)}>
          {t('pages.homePage.channels.dropdownButtonDelete')}
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={handleRename(channel)}>
          {t('pages.homePage.channels.dropdownButtonRename')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
