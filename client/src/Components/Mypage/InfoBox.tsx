import React, { useState } from 'react';
import styled from 'styled-components';
import { IPos, IProject } from '../../api/types';
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
  array: IProject[];
  defaultText: string;
  type: string;
}

function InfoBox({ title, array, defaultText, type }: InfoProps) {
  const getCurrentMembers = (positions: Array<IPos>): number => {
    const currentMembers = positions.map((position: IPos) => position.current);
    const sumCurrentMembers = currentMembers.reduce((a, b) => a + b);

    return sumCurrentMembers;
  };

  const getRequiredMembers = (positions: Array<IPos>): number => {
    const requiredMembers = positions.map(
      (position: IPos) => position.required
    );
    const sumRequiredMembers = requiredMembers.reduce((a, b) => a + b);

    return sumRequiredMembers;
  };

  return (
    <TitleStyle>
      <MaintitleStyle>{title}</MaintitleStyle>
      {array.length > 0 && type === 'project' ? (
        <ProjectBoxList>
          {array.map((project) => (
            <ProjectBox
              key={project._id}
              id={project._id}
              title={project.title}
              description={project.summary}
              image={project.thumb}
              state={[
                getCurrentMembers(project.position),
                getRequiredMembers(project.position),
              ]}
              category={project.field}
              receivedLike={project.receivedLike}
            />
          ))}
        </ProjectBoxList>
      ) : null}
      {array.length > 0 && type === 'user' ? (
        <div>
          <h2>Username</h2>
          <p>UserInfo</p>
        </div>
      ) : null}
      {array.length > 0 && type === 'alarm' ? (
        <AlarmBoxList>
          <AlarmBox visited={false} />
          <AlarmBox visited={true} />
        </AlarmBoxList>
      ) : null}
      {array.length === 0 && <InfoStyle> {defaultText} </InfoStyle>}
    </TitleStyle>
  );
}

export default InfoBox;
