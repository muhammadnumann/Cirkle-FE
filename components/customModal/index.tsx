import { CModal, ModalContent, ModalHeader, ModalBody, ModalFooter } from './customModal';
import React, { FC } from 'react';
const CustomModal: FC = () => {
  return (
    <CModal id="exampleModal">
      <ModalContent>
        <ModalHeader>header</ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>footer</ModalFooter>
      </ModalContent>
    </CModal>
  );
};
export default CustomModal;
