import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectBox from '../../Components/Project/ProjectBox';
import ProjectBoxList from '../../Components/Project/ProjectBoxList';
import AlarmBox from './alarmBox';
import AlarmBoxList from './alarmBoxList';

const TitleStyle = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

const MaintitleStyle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  line-height: 3.125rem;
  padding: 0.2rem;
  color: ${(props) => props.theme.palette.gray};
`;

const InfoStyle = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.palette.faintGray};
  box-sizing: border-box;
  padding: 25px 0;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 20px;
  color: ${(props) => props.theme.palette.lightGray};
  min-height: 75px;
`;

interface InfoProps {
  title: string;
  array: Array<number>;
  defaultText: string;
  type: string;
}

function InfoBox({ title, array, defaultText, type }: InfoProps) {
  const [state, setState] = useState(array);
  return (
    <TitleStyle>
      <MaintitleStyle>{title}</MaintitleStyle>
      {state.length > 0 && type === 'project' ? (
        <ProjectBoxList>
          <ProjectBox
            id={'1238120'}
            title="간단한 웹 게임 사이드 프로젝트"
            description="안녕하세요! 팀원 모집하고 있습니다!! 간단한 웹 게임 서비스를 생각하고 있습니다. 실력 상관 없이 즐겁게 하면 좋겠습니다."
            image="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png"
            state={[1, 4]}
            category="게임"
            receivedLike={0}
          />
        </ProjectBoxList>
      ) : null}
      {state.length > 0 && type === 'user' ? (
        <div>
          <h2>Username</h2>
          <p>UserInfo</p>
        </div>
      ) : null}
      {state.length > 0 && type === 'alarm' ? (
        <AlarmBoxList>
          <AlarmBox visited={false} />
          <AlarmBox visited={true} />
        </AlarmBoxList>
      ) : null}
      {state.length === 0 ? <InfoStyle> {defaultText} </InfoStyle> : null}
    </TitleStyle>
  );
}

export default InfoBox;
