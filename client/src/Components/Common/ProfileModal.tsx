import React from 'react';
import styled from 'styled-components';

const ProfileModalWrapper = styled.div``;

const ProfileImg = styled.img``;

const InfoWrapper = styled.div``;

const InfoUpper = styled.div``;

const InfoLower = styled.div``;

const BtnWrapper = styled.div``;

const MyInfoBtn = styled.button``;

const NoticeBtn = styled.button``;

const SubscribeBtn = styled.button``;

const MyProjectWrapper = styled.div``;

const MyProjectTitle = styled.div``;

const MyProjectContent = styled.div``;

const CreateProjectText = styled.span``;

const NewNoticeWrapper = styled.div``;

const NewNoticeTitle = styled.div``;

const NewNoticeContent = styled.div``;

function ProfileModal() {
  return (
    <ProfileModalWrapper>
      <ProfileImg />
      <InfoWrapper>
        <InfoUpper></InfoUpper>
        <InfoLower></InfoLower>
      </InfoWrapper>
      <BtnWrapper>
        <MyInfoBtn></MyInfoBtn>
        <NoticeBtn></NoticeBtn>
        <SubscribeBtn></SubscribeBtn>
      </BtnWrapper>
      <MyProjectWrapper>
        <MyProjectTitle></MyProjectTitle>
        <MyProjectContent></MyProjectContent>
        <CreateProjectText></CreateProjectText>
      </MyProjectWrapper>
      <NewNoticeWrapper>
        <NewNoticeTitle></NewNoticeTitle>
        <NewNoticeContent></NewNoticeContent>
      </NewNoticeWrapper>
    </ProfileModalWrapper>
  );
}

export default ProfileModal;
