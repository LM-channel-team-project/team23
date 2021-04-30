import React from 'react';
import styled from 'styled-components';
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
  /* padding-bottom: 24px; */
`;

const HeartIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${emptyHeart});
  background-repeat: no-repeat;
  background-size: contain;
`;

const Button = styled.button<{ heart: boolean }>`
  width: 92px;
  height: 36px;
  border: 1px solid #e0e2e5;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.palette.white};
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 6px;
  }
  &:hover {
    ${HeartIcon} {
      background-image: url(${(props) =>
        props.heart ? borderHeart : emptyHeart});
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
          <Button heart={true}>
            <HeartIcon />
            <FavoriteNumber>3</FavoriteNumber>
          </Button>
          <Button heart={false}>공유</Button>
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
