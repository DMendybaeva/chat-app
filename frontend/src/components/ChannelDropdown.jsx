import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { remove, rename } from '../store/modalsSlice';

export const ChannelDropdown = ({ channel, currentChannelId }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleRemove = (data) => {
    dispatch(remove(data));
  };

  const handleRename = (data) => {
    dispatch(rename(data));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant={channel.id === currentChannelId ? 'secondary' : 'light'}
        className="rounded-0 h-100 border-0"
      >
        <span className="visually-hidden">{t('pages.home.dropdown')}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          eventKey="remove"
          onClick={(e) => {
            e.stopPropagation();
            handleRemove(channel);
          }}
        >
          {t('pages.homePage.channels.dropdownButtonDelete')}
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="rename"
          onClick={(e) => {
            e.stopPropagation();
            handleRename(channel);
          }}
        >
          {t('pages.homePage.channels.dropdownButtonRename')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
