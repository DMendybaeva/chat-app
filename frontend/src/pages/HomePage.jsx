import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { fetchChats } from '../slices/chatsSlice';
import Channels from '../components/Channels';
import Messages from '../components/Messages';
import { useAuth } from '../providers/AuthProvider/useAuth';
import { getModal } from '../helpers/getModal';
import { MessageForm } from '../components/MessageForm/MessageForm';

const HomePage = () => {
  const [modalInfo, setModalInfo] = useState({ modalType: null, modalChannel: null }); // { modalType: 'add'||'remove'||'rename' , channel: id }

  const dispatch = useDispatch();
  const { currentChannelId, channels } = useSelector((state) => state.chats);
  const { messages } = useSelector((state) => state.chats);
  const { getAuthHeader } = useAuth();
  const { t } = useTranslation();

  const currentChannel = channels.find((channel) => channel.id === currentChannelId);
  const messagesCount = messages.filter((message) => message.channelId === currentChannelId).length;

  const renderModal = (props) => {
    if (!props.modalInfo.modalType) {
      return null;
    }

    const Modal = getModal(props.modalInfo.modalType);

    return <Modal modalInfo={props.modalInfo} handleHide={props.handleHide} handleRemove={props.handleRemove} />;
  };

  const handleAddTask = () => {
    setModalInfo({ modalType: 'adding', currentChannel: null });
  };

  const handleHide = () => {
    setModalInfo({ modalType: null, modalChannel: null });
  };

  const handleRemove = (channel) => () => {
    setModalInfo({ modalType: 'removing', modalChannel: channel });
  };

  const handleRename = (channel) => () => {
    setModalInfo({ modalType: 'renaming', modalChannel: channel });
  };

  useEffect(() => {
    const headers = getAuthHeader();
    dispatch(fetchChats(headers));
  }, []);

  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
          <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
            <b>{t('pages.homePage.channels.channelsTitle')}</b>
            <button type="button" className="p-0 text-primary btn btn-group-vertical" onClick={handleAddTask}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              <span className="visually-hidden">+</span>
            </button>
            {renderModal({ modalInfo, handleHide })}
          </div>
          <Channels handleRemove={handleRemove} handleRename={handleRename} />
        </div>
        <div className="col p-0 h-100">
          <div className="d-flex flex-column h-100">
            <div className="bg-light mb-4 p-3 shadow-sm small">
              <p className="m-0">
                <b>{t('pages.homePage.channels.currentChannel', { currentChannelName: currentChannel?.name })}</b>
              </p>
              <span className="text-muted">
                {t('pages.homePage.messages.messagesCount.key', { count: messagesCount, messagesCount })}
              </span>
            </div>
            <Messages />
            <div className="mt-auto px-5 py-3">
              <MessageForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
