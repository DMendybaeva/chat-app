import { AddChannelModal } from '../components/AddChannelModal';
import { RemoveChannelModal } from '../components/RemoveChannelModal';
import { RenameChannelModal } from '../components/RenameChannelModal';

const modals = {
  adding: AddChannelModal,
  removing: RemoveChannelModal,
  renaming: RenameChannelModal,
};
export const getModal = (modalName) => modals[modalName];
