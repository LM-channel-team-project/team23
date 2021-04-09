import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: relative;
  top: 50px;
  bottom: 270px;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 40px 5px 0 5px;
  z-index: -1;
`;

const Header = styled.header``;
const HeaderTXT = styled.div`
  margin-bottom: 30px;
`;
const PageSubTitle = styled.h3`
  font-size: 0.8em;
  font-weight: 600;
  color: #e26964;
  margin-bottom: 10px;
`;
const PageTitle = styled.h1`
  font-weight: 600;
  font-size: 1.3em;
`;

const SelectOptions = styled.div`
  margin-bottom: 20px;
`;
const SelectOption = styled.select`
  width: 130px;
  height: 35px;
  appearance: none;
  background: url('https://www.flaticon.com/svg/vstatic/svg/60/60995.svg?token=exp=1617882874~hmac=4b2aab83f07822d07112fa16cfcc35d3');
  background-size: 0.7em;
  background-repeat: no-repeat;
  background-position: 95% 50%;
  border-radius: 3px;
  padding-left: 15px;
  font-size: 0.6em;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
const Option = styled.option`
  font-size: 0.6em;
`;
const Optgroup = styled.optgroup``;

// Recommend tab
const RecommendTab = styled.div`
  width: 100%;
  border: 1px solid #b6d2d8;
  margin-bottom: 20px;
  & > * {
    padding: 0 15px;
  }
`;
const RecommendTabHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #eff7f9;
  color: #4d9bb0;
  font-weight: 600;
`;
const RecommendList = styled.ul`
  width: 100%;
  display: flex;
  // display: grid;
  // grid: auto-flow / repeat(4, 1fr);
`;
const RecommendOne = styled.li`
  width: 100%;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const RecommendOneTop = styled.div`
  height: 90px;
  display: flex;
  align-items: flex-start;
  padding: 15px 0;
  border-bottom: 1px solid #d5cfcf;
`;
const RecommendOneImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;
const RecommendOnedetail = styled.div``;
const RecommendOneUsername = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
`;
const RecommendOneLV = styled.div`
  display: inline-block;
  border: 1px solid red;
  border-radius: 10px;
  font-size: 0.8em;
  padding: 4px 13px;
  margin-right: 8px;
  color: red;
`;
const RecommendOneInterest = styled.p`
  color: #a0a0a0;
  font-size: 0.7em;
  font-weight: 600;
  margin-bottom: 5px;
`;
const RecommendOneStack = styled.p`
  color: #a0a0a0;
  font-size: 0.7em;
  font-weight: 600;
`;
const RecommendOnebottom = styled.div`
  width: 100%;
  height: 40px;
  font-size: 0.7em;
  color: #4f4d4d;
  display: flex;
  align-items: center;
`;

const FriendsList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // display: flex;
  // flex-wrap: wrap;
  gap: 10px;
`;
const Friend = styled.div`
  width: 230px;
  height: 190px;
  position: relative;
  padding: 10px;
  box-shadow: 0 3px 24px 0 rgba(0, 0, 0, 0.06);
  border-top-left-radius: 20px;
`;
const FriendTag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-bottom: 30px solid transparent;
  border-left: 30px solid #a06cff;
`;
const FriendTagSpan = styled.span`
  position: absolute;
  top: 3px;
  left: 3px;
  font-size: 0.4em;
  color: #ffffff;
`;
const FriendTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const FriendImg = styled.img`
  width: 55px;
  height: 55px;
  margin-right: 15px;
`;
const FriendUsername = styled.div`
  width: 100%;
  font-weight: 600;
  margin-bottom: 5px;
`;
const FriendLV = styled.p`
  width: 45px;
  border: 1px solid red;
  border-radius: 10px;
  font-size: 0.8em;
  text-align: center;
  padding: 4px 0;
  color: red;
  margin-bottom: 5px;
`;

const FriendMid = styled.div`
  display: grid;
  grid: 1fr 1fr / auto-flow;
  grid-row-gap: 5px;
  padding-bottom: 10px;
  border-bottom: 0.5px solid rgba(142, 138, 138, 0.3);
`;
const Major = styled.span`
  font-size: 0.7em;
  display: flex;
  justify-content: space-between;
`;
const MajorTitle = styled.p`
  font-weight: 600;
`;
const MajorLV = styled.p`
  font-weight: 600;
  color: #8e8a8a;
`;
const Minor = styled.span`
  font-size: 0.7em;
  display: flex;
  justify-content: space-between;
`;
const MinorTitle = styled.p`
  font-weight: 600;
`;
const MinorLV = styled.p`
  font-weight: 600;
  color: #8e8a8a;
`;

const FriendBottom = styled.div`
  padding: 10px 0;
  font-size: 0.7em;
`;
const CurrentProject = styled.p`
  margin-bottom: 15px;
`;
const FriendFooter = styled.div``;
const Coffee = styled.span`
  margin-right: 10px;
`;
const Like = styled.span``;

const PeoplePresenter = () => (
  <Main>
    <Header>
      <HeaderTXT>
        <PageSubTitle>LET`s with</PageSubTitle>
        <PageTitle>멤버 모집하기</PageTitle>
      </HeaderTXT>
      <SelectOptions>
        <SelectOption>
          <Option value="KR00">지역 미지정</Option>
          <Option value="KR01">서울특별시</Option>
          <Option value="KR02">경기도</Option>
          <Option value="KR03">부산광역시</Option>
          <Option value="KR04">인천광역시</Option>
          <Option value="KR05">대구광역시</Option>
          <Option value="KR06">경상남도</Option>
          <Option value="KR07">경상북도</Option>
          <Option value="KR08">대전광역시</Option>
          <Option value="KR09">충청남도</Option>
          <Option value="KR10">충청북도</Option>
          <Option value="KR11">전라남도</Option>
          <Option value="KR12">전라북도</Option>
          <Option value="KR13">광주광역시</Option>
          <Option value="KR14">강원도</Option>
          <Option value="KR15">울산광역시</Option>
          <Option value="KR16">제주특별자치도</Option>
          <Option value="KR17">세종특별자치시</Option>
        </SelectOption>
        <SelectOption>
          <Option value="0000">직무</Option>
          <Optgroup label="기획">
            <Option value="0201">UI/UX기획</Option>
            <Option value="0202">게임기획</Option>
            <Option value="0203">프로젝트 매니저</Option>
            <Option value="0204">하드웨어(제품) 기획</Option>
          </Optgroup>
          <Optgroup label="디자인">
            <Option value="0301">그래픽디자인</Option>
            <Option value="0302">UI/UX디자인</Option>
            <Option value="0303">3D디자인</Option>
            <Option value="0304">하드웨어(제품) 디자인</Option>
            <Option value="0305">기타</Option>
          </Optgroup>
          <Optgroup label="프론트엔드 개발">
            <Option value="0401">IOS</Option>
            <Option value="0402">안드로이드</Option>
            <Option value="0403">웹프론트엔드</Option>
            <Option value="0404">웹퍼블리셔</Option>
            <Option value="0405">크로스플랫폼</Option>
          </Optgroup>
          <Optgroup label="백엔드 개발">
            <Option value="0501">웹 서버</Option>
            <Option value="0504">블록체인</Option>
            <Option value="0505">AI</Option>
            <Option value="0503">DB/빅데이터/DS</Option>
            <Option value="0502">게임 서버</Option>
          </Optgroup>
          <Optgroup label="사업">
            <Option value="0101">사업기획/개발</Option>
            <Option value="0102">마케팅</Option>
            <Option value="0103">재무/회계</Option>
            <Option value="0104">영업</Option>
            <Option value="0105">사업(그외)</Option>
          </Optgroup>
          <Optgroup label="기타">
            <Option value="0601">사운드</Option>
            <Option value="0602">영상</Option>
            <Option value="0603">운영</Option>
            <Option value="0604">QA</Option>
            <Option value="0605">기타</Option>
          </Optgroup>
        </SelectOption>
        <SelectOption>
          <Option value="00">프로젝트 소속</Option>
          <Option value="01">미참여 중</Option>
          <Option value="02">참여 중</Option>
        </SelectOption>
      </SelectOptions>
    </Header>
    <RecommendTab>
      <RecommendTabHeader>
        [추천] 좌우 고민하지 말고 바로 이 멤버!
      </RecommendTabHeader>
      <RecommendList>
        <RecommendOne>
          <RecommendOneTop>
            <RecommendOneImg
              src="http://kawala.in/assets/global/images/avatars/avatar1.png"
              alt="Avatar"
            />
            <RecommendOnedetail>
              <RecommendOneUsername>
                <RecommendOneLV>L6</RecommendOneLV>
                allmie
              </RecommendOneUsername>
              <RecommendOneInterest>
                공유 서비스, 우주/외계인, 여행..
              </RecommendOneInterest>
              <RecommendOneStack>#JAVA #서버 #WEB</RecommendOneStack>
            </RecommendOnedetail>
          </RecommendOneTop>
          <RecommendOnebottom>웹 서버, 게임 서버</RecommendOnebottom>
        </RecommendOne>
        <RecommendOne>
          <RecommendOneTop>
            <RecommendOneImg
              src="http://kawala.in/assets/global/images/avatars/avatar2.png"
              alt="Avatar"
            />
            <RecommendOnedetail>
              <RecommendOneUsername>
                <RecommendOneLV>L4</RecommendOneLV>
                csw1105
              </RecommendOneUsername>
              <RecommendOneInterest>
                부동산, O2O, 소셜네트워크..
              </RecommendOneInterest>
              <RecommendOneStack></RecommendOneStack>
            </RecommendOnedetail>
          </RecommendOneTop>
          <RecommendOnebottom>안드로이드</RecommendOnebottom>
        </RecommendOne>
        <RecommendOne>
          <RecommendOneTop>
            <RecommendOneImg
              src="http://kawala.in/assets/global/images/avatars/avatar3.png"
              alt="Avatar"
            />
            <RecommendOnedetail>
              <RecommendOneUsername>
                <RecommendOneLV>L1</RecommendOneLV>
                jj2
              </RecommendOneUsername>
              <RecommendOneInterest>금융, O2O</RecommendOneInterest>
              <RecommendOneStack></RecommendOneStack>
            </RecommendOnedetail>
          </RecommendOneTop>
          <RecommendOnebottom>사업기획</RecommendOnebottom>
        </RecommendOne>
        <RecommendOne>
          <RecommendOneTop>
            <RecommendOneImg
              src="http://kawala.in/assets/global/images/avatars/avatar4.png"
              alt="Avatar"
            />
            <RecommendOnedetail>
              <RecommendOneUsername>
                <RecommendOneLV>L4</RecommendOneLV>
                하품
              </RecommendOneUsername>
              <RecommendOneInterest>유틸</RecommendOneInterest>
              <RecommendOneStack></RecommendOneStack>
            </RecommendOnedetail>
          </RecommendOneTop>
          <RecommendOnebottom>프론트엔드, 웹 서버</RecommendOnebottom>
        </RecommendOne>
      </RecommendList>
    </RecommendTab>

    <FriendsList>
      <Friend>
        <FriendTag></FriendTag>
        <FriendTagSpan>N</FriendTagSpan>
        <FriendTop>
          <FriendImg
            src="http://kawala.in/assets/global/images/avatars/avatar9.png"
            alt="Avatar"
          />
          <FriendUsername>
            <FriendLV>L6</FriendLV>a
          </FriendUsername>
        </FriendTop>
        <FriendMid>
          <Major>
            <MajorTitle>[본캐] UI/UX 기획</MajorTitle>
            <MajorLV>중수</MajorLV>
          </Major>
          <Minor>
            <MinorTitle>[부캐] UI/UX 디자인</MinorTitle>
            <MinorLV>초보</MinorLV>
          </Minor>
        </FriendMid>
        <FriendBottom>
          <CurrentProject>진행중인 프로젝트가 0개 있습니다.</CurrentProject>
          <FriendFooter>
            <Coffee>🍺*3</Coffee>
            {/* <Coffee src="" alt="coffee" /> */}
            <Like>♥0</Like>
            {/* <Like src="" alt="heart" /> */}
          </FriendFooter>
        </FriendBottom>
      </Friend>
      <Friend>
        <FriendTag></FriendTag>
        <FriendTagSpan>N</FriendTagSpan>
        <FriendTop>
          <FriendImg
            src="http://kawala.in/assets/global/images/avatars/avatar9.png"
            alt="Avatar"
          />
          <FriendUsername>
            <FriendLV>L6</FriendLV>b
          </FriendUsername>
        </FriendTop>
        <FriendMid>
          <Major>
            <MajorTitle>[본캐] UI/UX 기획</MajorTitle>
            <MajorLV>중수</MajorLV>
          </Major>
          <Minor>
            <MinorTitle>[부캐] UI/UX 디자인</MinorTitle>
            <MinorLV>초보</MinorLV>
          </Minor>
        </FriendMid>
        <FriendBottom>
          <CurrentProject>진행중인 프로젝트가 0개 있습니다.</CurrentProject>
          <FriendFooter>
            <Coffee>🍺*3</Coffee>
            {/* <Coffee src="" alt="coffee" /> */}
            <Like>♥0</Like>
            {/* <Like src="" alt="heart" /> */}
          </FriendFooter>
        </FriendBottom>
      </Friend>
      <Friend>
        <FriendTag></FriendTag>
        <FriendTagSpan>N</FriendTagSpan>
        <FriendTop>
          <FriendImg
            src="http://kawala.in/assets/global/images/avatars/avatar9.png"
            alt="Avatar"
          />
          <FriendUsername>
            <FriendLV>L6</FriendLV>c
          </FriendUsername>
        </FriendTop>
        <FriendMid>
          <Major>
            <MajorTitle>[본캐] UI/UX 기획</MajorTitle>
            <MajorLV>중수</MajorLV>
          </Major>
          <Minor>
            <MinorTitle>[부캐] UI/UX 디자인</MinorTitle>
            <MinorLV>초보</MinorLV>
          </Minor>
        </FriendMid>
        <FriendBottom>
          <CurrentProject>진행중인 프로젝트가 0개 있습니다.</CurrentProject>
          <FriendFooter>
            <Coffee>🍺*3</Coffee>
            {/* <Coffee src="" alt="coffee" /> */}
            <Like>♥0</Like>
            {/* <Like src="" alt="heart" /> */}
          </FriendFooter>
        </FriendBottom>
      </Friend>
      <Friend>
        <FriendTag></FriendTag>
        <FriendTagSpan>N</FriendTagSpan>
        <FriendTop>
          <FriendImg
            src="http://kawala.in/assets/global/images/avatars/avatar9.png"
            alt="Avatar"
          />
          <FriendUsername>
            <FriendLV>L6</FriendLV>
            allmie
          </FriendUsername>
        </FriendTop>
        <FriendMid>
          <Major>
            <MajorTitle>[본캐] UI/UX 기획</MajorTitle>
            <MajorLV>중수</MajorLV>
          </Major>
          <Minor>
            <MinorTitle>[부캐] UI/UX 디자인</MinorTitle>
            <MinorLV>초보</MinorLV>
          </Minor>
        </FriendMid>
        <FriendBottom>
          <CurrentProject>진행중인 프로젝트가 0개 있습니다.</CurrentProject>
          <FriendFooter>
            <Coffee>🍺*3</Coffee>
            {/* <Coffee src="" alt="coffee" /> */}
            <Like>♥0</Like>
            {/* <Like src="" alt="heart" /> */}
          </FriendFooter>
        </FriendBottom>
      </Friend>
      <Friend>
        <FriendTag></FriendTag>
        <FriendTagSpan>N</FriendTagSpan>
        <FriendTop>
          <FriendImg
            src="http://kawala.in/assets/global/images/avatars/avatar9.png"
            alt="Avatar"
          />
          <FriendUsername>
            <FriendLV>L6</FriendLV>
            allmie
          </FriendUsername>
        </FriendTop>
        <FriendMid>
          <Major>
            <MajorTitle>[본캐] UI/UX 기획</MajorTitle>
            <MajorLV>중수</MajorLV>
          </Major>
          <Minor>
            <MinorTitle>[부캐] UI/UX 디자인</MinorTitle>
            <MinorLV>초보</MinorLV>
          </Minor>
        </FriendMid>
        <FriendBottom>
          <CurrentProject>진행중인 프로젝트가 0개 있습니다.</CurrentProject>
          <FriendFooter>
            <Coffee>🍺*3</Coffee>
            {/* <Coffee src="" alt="coffee" /> */}
            <Like>♥0</Like>
            {/* <Like src="" alt="heart" /> */}
          </FriendFooter>
        </FriendBottom>
      </Friend>
      <Friend>
        <FriendTag></FriendTag>
        <FriendTagSpan>N</FriendTagSpan>
        <FriendTop>
          <FriendImg
            src="http://kawala.in/assets/global/images/avatars/avatar9.png"
            alt="Avatar"
          />
          <FriendUsername>
            <FriendLV>L6</FriendLV>f
          </FriendUsername>
        </FriendTop>
        <FriendMid>
          <Major>
            <MajorTitle>[본캐] UI/UX 기획</MajorTitle>
            <MajorLV>중수</MajorLV>
          </Major>
          <Minor>
            <MinorTitle>[부캐] UI/UX 디자인</MinorTitle>
            <MinorLV>초보</MinorLV>
          </Minor>
        </FriendMid>
        <FriendBottom>
          <CurrentProject>진행중인 프로젝트가 0개 있습니다.</CurrentProject>
          <FriendFooter>
            <Coffee>🍺*3</Coffee>
            {/* <Coffee src="" alt="coffee" /> */}
            <Like>♥0</Like>
            {/* <Like src="" alt="heart" /> */}
          </FriendFooter>
        </FriendBottom>
      </Friend>
    </FriendsList>
  </Main>
);

export default PeoplePresenter;
