import { AddChannelModal } from '../components/Modals/AddChannelModal';
import { RemoveChannelModal } from '../components/Modals/RemoveChannelModal';
import { RenameChannelModal } from '../components/Modals/RenameChannelModal';

const modals = {
  adding: AddChannelModal,
  removing: RemoveChannelModal,
  renaming: RenameChannelModal,
};
export const getModal = (modalName) => modals[modalName];
