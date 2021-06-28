import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const ModalWrapper = styled.div<{ openModal: boolean }>`
  visibility: ${(props) => (props.openModal ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 70;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
`;

const CloseIcon = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 24px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin: 0.4rem;
  padding: 0.4rem;
  &:hover {
    background-color: ${(props) => props.theme.palette.faintGray};
  }
`;

interface IProps {
  open: boolean;
  onToggle: (login: boolean) => void;
  children: JSX.Element;
}

const SimpleModal = ({ open, onToggle, children }: IProps) => {
  return (
    <ModalWrapper openModal={open}>
      <ModalContent>
        <CloseIcon onClick={() => onToggle(!open)} />
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default SimpleModal;
