import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ProjectDtailHeader from '../../../Components/Project/ProjectDetail/ProjectDetailHeader';
import ProjectTab from '../../../Components/Project/ProjectDetail/ProjectTab';
import Info from '../../../Components/Project/ProjectDetail/Info';
import Question from '../../../Components/Project/ProjectDetail/Question';
import RightMenu from '../../../Components/Project/ProjectDetail/RightMenu';
import Management from '../../../Components/Project/ProjectDetail/Management';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PROJECT_SERVER, USER_SERVER } from '../../../Config';

const Container = styled.section``;

const ProjectPageWrap = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Contents = styled.div`
  max-width: 840px;
  width: 100%;
  padding: 0 0 40px;
  margin: 0;
`;

interface Ipos {
  pos: string;
  required: number;
  current: number;
}

const ProjectDetail = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const { id } = useParams<{ id: string }>();
  const [pid, setPid] = useState('');
  const [title, setTitle] = useState('');
  const [thumb, setThumb] = useState('');
  const [info, setInfo] = useState('');
  const [field, setField] = useState('');
  const [area, setArea] = useState('');
  const [position, setPosition] = useState<Ipos[]>([]);
  const [referenceURL, setReferenceURL] = useState<string[]>([]);
  const [startAt, setStartAt] = useState<Date>(new Date());
  const [endAt, setEndAt] = useState<Date>(new Date());
  const [writer, setWriter] = useState('');
  const [projectLV, setProjectLV] = useState('');
  const [receivedLike, setReceivedLike] = useState(0);
  const [avartarImg, setAvartarImg] = useState('');
  const [nickname, setNickname] = useState('');
  const [recruitment, setRecruitment] = useState(true);
  const userId = useRef(localStorage.getItem('userId'));

  const handleChangeTab = (index: number) => {
    if (currentTab !== index) {
      setCurrentTab(index);
    }
  };

  useEffect(() => {
    if (currentTab === 2 && writer !== userId.current) {
      alert('접근 권한이 없습니다');
      setCurrentTab(0);
    }
  }, [currentTab]);

  useEffect(() => {
    axios.post(`${PROJECT_SERVER}/info`, { _id: id }).then((res) => {
      if (!res.data.success) {
        alert(`프로젝트 데이터를 가져오는데 실패했습니다 (${res.data.err})`);
        return;
      }
      const {
        _id,
        title,
        thumb,
        info,
        field,
        area,
        position,
        referenceURL,
        startAt,
        endAt,
        writer,
        projectLV,
        receivedLike,
      } = res.data.project;

      setPid(_id);
      setTitle(title);
      setThumb(thumb);
      axios.get(`${info}`).then((response) => {
        setInfo(response.data);
      });
      setField(field);
      setArea(area);
      setPosition(position);
      setRecruitment(
        !position.reduce(
          (acc: boolean, v: any) => acc && v['current'] === v['required'],
          true
        )
      );
      setReferenceURL(referenceURL);
      setStartAt(new Date(startAt));
      setEndAt(new Date(endAt));
      setWriter(writer);
      setProjectLV(projectLV);
      setReceivedLike(receivedLike);
      axios.post(`${USER_SERVER}/info`, { _id: writer }).then((response) => {
        if (!response.data.user) {
          alert(`리더 정보를 가져오는데 실패했습니다 (${response.data.err})`);
          return;
        }
        const { avartarImg, nickname } = response.data.user;
        setAvartarImg(avartarImg);
        setNickname(nickname);
      });
    });
  }, []);

  return (
    <Container>
      <ProjectDtailHeader
        field={field}
        nickname={nickname}
        recruitment={recruitment}
        avartarImg={avartarImg}
        title={title}
      />
      <ProjectPageWrap>
        <Contents>
          <ProjectTab current={currentTab} onClick={handleChangeTab} />
          {currentTab === 0 && (
            <Info
              info={info}
              referenceURL={referenceURL}
              nickname={nickname}
              position={position}
            />
          )}
          {currentTab === 1 && <Question />}
          {currentTab === 2 && writer === userId.current && (
            <Management projectId={pid} />
          )}
        </Contents>
        <RightMenu
          avartarImg={avartarImg}
          endAt={`${endAt.getFullYear()}/${
            endAt.getMonth() + 1
          }/${endAt.getDate()}`}
          startAt={`${startAt.getFullYear()}/${
            startAt.getMonth() + 1
          }/${startAt.getDate()}`}
          date={`${Math.ceil(
            (endAt.getTime() - startAt.getTime()) / (1000 * 3600 * 24)
          )}`}
          field={field}
          nickname={nickname}
          receivedLike={receivedLike}
        />
      </ProjectPageWrap>
    </Container>
  );
};

export default ProjectDetail;
