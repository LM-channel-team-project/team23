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
  z-index: 50;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  border-radius: 25px;
  min-width: 400px;
  min-height: 300px;
  background: ${(props) => props.theme.palette.white};
  padding: 1.2rem 2rem;
  box-sizing: border-box;
`;

const CloseIcon = styled(MdClose)`
  cursor: pointer;
  position: relative;
  width: 36px;
  height: 36px;
  top: 0px;
  left: 90%;
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
