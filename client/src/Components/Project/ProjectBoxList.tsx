import React from 'react';
import ProjectBox from '../PersonBox';
import styled from 'styled-components';

const BoxListStyle = styled.li`
  padding: 0.5rem;
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -10px;
  width: 100%;
`;

const ProjectBoxList = () => <BoxListStyle></BoxListStyle>;

export default ProjectBoxList;
