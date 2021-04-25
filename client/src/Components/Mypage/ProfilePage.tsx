import React from 'react';
import styled from 'styled-components';
import ImgInfo from '../People/ImgInfo';

const Container = styled.div`
  width: 95%;
  min-height: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  p {
    color: ${(props) => props.theme.palette.orange};
    font-size: 12px;
  }
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 2rem;
  width: 100%;
`;

const InputStyle = styled.input`
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.palette.lightGray};
  border-radius: 4px;
  height: 38px;
  width: 65%;
  padding: 0.5rem;
`;

const RowCenterArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.9rem;
  padding: 0.3rem;
  p {
    margin-left: 2rem;
  }
  h3 {
    font-size: 12px;
    width: 120px;
    line-height: 1.5;
    padding-top: 10px;
  }
`;
const RowArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 0.9rem;
  padding: 0.3rem;
  p {
    margin-left: 2rem;
  }
  h3 {
    font-size: 0.75rem;
    width: 120px;
    line-height: 1.5;
    padding-top: 10px;
  }
  textarea {
    overflow: auto;
    width: 90%;
    height: 190px;
    border: 1px solid ${(props) => props.theme.palette.lightGray};
    border-radius: 4px;
    padding: 0.5rem;
    margin: 0.2rem;
    resize: none;
  }
`;

const InputArea = styled.div`
  width: 80%;
`;
const InfoArea = styled.div`
  width: 100%;
`;

const SelectArea = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Select = styled.select`
  width: 200px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.palette.lightGray};
  padding-left: 20px;
  margin-right: 15px;
  font-size: 12px;
  appearance: none;
  background-size: 10px 5px;
  background-position: 90%;
  background-repeat: no-repeat;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSA1LjI1bC01LTVoMTBsLTUgNXoiIGZpbGw9IiM0MjQ5NUIiLz48L3N2Zz4=);
`;

const Option = styled.option`
  text-align: center;
  margin: 1.2rem;
  color: ${(props) => props.theme.palette.gray};
  padding: 0px 2px 1px;
`;

const Button = styled.button`
  color: ${(props) => props.theme.palette.white};
  background-color: ${(props) => props.theme.palette.darkblue};
  border: 1px solid ${(props) => props.theme.palette.darkblue};
  margin: 0.6rem;
  padding: 1rem;
  font-size: 12px;
  height: 40px;
  border-radius: 4px;
  text-align: center;
  line-height: 0.5;
  width: 110px;
`;

const RedBtton = styled.button`
  color: ${(props) => props.theme.palette.white};
  background-color: ${(props) => props.theme.palette.red};
  border: 1px solid ${(props) => props.theme.palette.red};
  margin: 0.6rem;
  padding: 1rem;
  font-size: 12px;
  height: 40px;
  border-radius: 4px;
  text-align: center;
  line-height: 0.5;
  width: 110px;
`;

const MiniButton = styled.button`
  color: ${(props) => props.theme.palette.white};
  background-color: ${(props) => props.theme.palette.darkblue};
  border: 1px solid ${(props) => props.theme.palette.darkblue};
  margin: 0.6rem;
  padding: 0.8rem;
  font-size: 12px;
  height: 40px;
  border-radius: 4px;
  text-align: center;
  line-height: 0.5;
  width: 80px;
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function ProfilePage() {
  return (
    <Container>
      <ImgInfo />
      <FormArea>
        <InputArea>
          <RowArea>
            <InputStyle type="text" placeholder="abc@naver.com" readOnly />
          </RowArea>
          <RowCenterArea>
            <InputStyle type="text" placeholder="닉네임" />
            <p>사용 가능합니다.</p>
          </RowCenterArea>
          <RowArea>
            <InputStyle type="text" placeholder="010-1234-5667" readOnly />
          </RowArea>
        </InputArea>
        <InfoArea>
          <RowArea>
            <h3>직무/능력치</h3>
            <SelectArea>
              <Select>
                <Option>ios</Option>
                <Option>안드로이드</Option>
                <Option>FE</Option>
                <Option>크로스플랫폼</Option>
                <Option>웹서버</Option>
                <Option>블록체인</Option>
                <Option>AI</Option>
                <Option>DB/빅데이터</Option>
                <Option>게임</Option>
              </Select>
              <Select>
                <Option>초보</Option>
                <Option>중수</Option>
                <Option>고수</Option>
              </Select>
            </SelectArea>
          </RowArea>
          <RowArea>
            <h3>지역 설정</h3>
            <SelectArea>
              <Select>
                <Option>지역무관</Option>
                <Option>서울</Option>
                <Option>경기</Option>
                <Option>인천</Option>
                <Option>대전</Option>
                <Option>세종</Option>
                <Option>충남</Option>
                <Option>충북</Option>
                <Option>광주</Option>
                <Option>전남</Option>
                <Option>전북</Option>
                <Option>대구</Option>
                <Option>경북</Option>
                <Option>부산</Option>
                <Option>울산</Option>
                <Option>경남</Option>
                <Option>강원</Option>
                <Option>제주</Option>
              </Select>
            </SelectArea>
          </RowArea>
          <RowArea>
            <h3>시간 설정</h3>
            <SelectArea>
              <Select>
                <Option>주중/주말 모두 가능</Option>
                <Option>주중만 가능</Option>
                <Option>주말만 가능</Option>
              </Select>
              <Select>
                <Option>상관없음</Option>
                <Option>오전 위주</Option>
                <Option>오후 위주</Option>
                <Option>저녁 위주</Option>
              </Select>
            </SelectArea>
          </RowArea>
          <RowArea>
            <h3>자기 소개</h3>
            <textarea placeholder="최대 200자까지 작성 가능합니다." />
          </RowArea>
          <RowCenterArea>
            <h3>포트폴리오</h3>
            <InputStyle type="text" placeholder="URL을 입력해주세요" />
            <MiniButton>추가</MiniButton>
          </RowCenterArea>
        </InfoArea>
        <ButtonArea>
          <Button>수정하기</Button>
          <RedBtton>저장하기</RedBtton>
        </ButtonArea>
      </FormArea>
    </Container>
  );
}

export default ProfilePage;
