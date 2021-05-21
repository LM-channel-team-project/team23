import React from 'react';
import styled from 'styled-components';
import Button from '../../Common/Button';
import emptyHeart from '../../../img/empty-heart.svg';
import borderHeart from '../../../img/border-heart.svg';
import CheckIcon from '../../../img/check_icon.svg';

const Container = styled.div`
  max-width: 280px;
  width: 100%;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  width: 100%;
  padding: 20px;
  position: sticky;
  top: 60px;
`;

const HeartAndShareWrap = styled.div`
  display: flex;
  justify-content: center;

  & button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.palette.lightGray};
    border-radius: 2px;
  }
`;

const HeartIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${emptyHeart});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const HeartBtnWrap = styled.div`
  &:hover {
    ${HeartIcon} {
      background-image: url(${borderHeart});
    }
  }
`;

const FavoriteNumber = styled.span``;

const InfoWrap = styled.div`
  padding-top: 20px;
  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.palette.lightGray};
    padding: 20px 0;
  }
`;

const CheckTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 5px;
  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url(${CheckIcon});
    margin-right: 8px;
  }
`;

const LeaderInfo = styled.div`
  display: flex;
  align-items: center;
`;

const LeaderImage = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 14px;
`;

const Image = styled.img`
  width: 100%;
`;

const LeaderName = styled.span`
  font-size: 15px;
  color: #61b4c7;
`;

const TabText = styled.span`
  color: ${(props) => props.theme.palette.lightGray};
  font-size: 14px;
  line-height: 14px;
`;

const Ul = styled.ul`
  display: flex;
  overflow-x: auto;
`;

const Li = styled.li`
  margin-right: -20px;
`;

const SubscribeImageWrap = styled.div`
  max-width: 62px;
  width: 62px;
  height: 62px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.palette.faintGray};
  background-color: ${(props) => props.theme.palette.white};
  overflow: hidden;
  position: relative;
`;

const RightMenu = () => {
  return (
    <Container>
      <Contents>
        <HeartAndShareWrap>
          <HeartBtnWrap>
            <Button ButtonColor="white" ButtonMode="active" ButtonSize="medium">
              <HeartIcon />
              <FavoriteNumber>3</FavoriteNumber>
            </Button>
          </HeartBtnWrap>
          <Button
            ButtonColor="white"
            ButtonMode="active"
            ButtonName="공유"
            ButtonSize="medium"
          />
        </HeartAndShareWrap>
        <InfoWrap>
          <CheckTitle>리더 정보</CheckTitle>
          <LeaderInfo>
            <LeaderImage>
              <Image
                src="https://letspl.me/assets/images/prof-no-img.png"
                alt="user_image"
              />
            </LeaderImage>
            <LeaderName>용현준</LeaderName>
          </LeaderInfo>
        </InfoWrap>
        <InfoWrap>
          <CheckTitle>프로젝트 기간</CheckTitle>
          <TabText>21.04.08 ~21.10.08 (184일)</TabText>
        </InfoWrap>
        <InfoWrap>
          <CheckTitle>프로젝트 분야</CheckTitle>
          <TabText>게임</TabText>
        </InfoWrap>
        <InfoWrap>
          <CheckTitle>구독중인 사람</CheckTitle>
          <Ul>
            <Li>
              <SubscribeImageWrap>
                <Image
                  src="https://letspl.me/assets/images/prof-no-img.png"
                  alt="user_image"
                />
              </SubscribeImageWrap>
            </Li>
            <Li>
              <SubscribeImageWrap>
                <Image
                  src="https://letspl.me/assets/images/prof-no-img.png"
                  alt="user_image"
                />
              </SubscribeImageWrap>
            </Li>
            <Li>
              <SubscribeImageWrap>
                <Image
                  src="https://letspl.me/assets/images/prof-no-img.png"
                  alt="user_image"
                />
              </SubscribeImageWrap>
            </Li>
          </Ul>
        </InfoWrap>
      </Contents>
    </Container>
  );
};

export default RightMenu;
