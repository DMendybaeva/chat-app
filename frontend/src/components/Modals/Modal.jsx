import { getModal } from '../../helpers/getModal';

export const Modal = ({ modalInfo, handleHide }) => {
  if (!modalInfo.modalType) {
    return null;
  }

  const ModalComponent = getModal(modalInfo.modalType);

  return <ModalComponent modalInfo={modalInfo} handleHide={handleHide} />;
};
