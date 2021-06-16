import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fullHeart from '../../img/full-heart.svg';
import emptyHeart from '../../img/empty-heart.svg';
import borderHeart from '../../img/border-heart.svg';
import axios from 'axios';
import { LIKE_SERVER } from '../../Config';

const HeartBtn = styled.div<{ isLike: boolean }>`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 15px;
  right: 20px;
  background-image: url(${(props) => (props.isLike ? fullHeart : emptyHeart)});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  &:hover {
    background-image: url(${borderHeart});
  }
`;

interface IProps {
  isProject: boolean;
  userId: null | string;
  projectId: null | string;
}

const LikeButton = ({ isProject, userId, projectId }: IProps) => {
  const [isLike, setIsLike] = useState(false);
  let formData = {};
  if (isProject) {
    formData = {
      projectId,
      userId,
    };
  }

  const handleUplike = async () => {
    try {
      const {
        data: { success },
      } = await axios.post(`${LIKE_SERVER}/upLike`, formData);
      if (success) {
        setIsLike(true);
      }
    } catch (error) {
      alert(`좋아요에 실패했습니다. ${error}`);
    }
  };

  const handleUnLike = async () => {
    try {
      const {
        data: { success },
      } = await axios.post(`${LIKE_SERVER}/unLike`, formData);
      if (success) {
        setIsLike(false);
      }
    } catch (error) {
      alert(`좋아요 취소에 실패했습니다. ${error}`);
    }
  };

  const onHeartClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (!isLike) {
      handleUplike();
    } else {
      handleUnLike();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { likes },
        } = await axios.post(`${LIKE_SERVER}/getLike`, formData);
        likes.forEach((like: any) => {
          if (like.SenduserId === userId) {
            setIsLike(true);
          }
        });
      } catch (error) {
        alert(`좋아요 정보를 받아오지 못했습니다. ${error}`);
      }
    };
    fetchData();
  }, []);

  return <HeartBtn onClick={onHeartClick} isLike={isLike} />;
};

export default LikeButton;
