import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fullHeart from '../../img/full-heart.svg';
import emptyHeart from '../../img/empty-heart.svg';
import borderHeart from '../../img/border-heart.svg';
import axios from 'axios';
import { LIKE_SERVER } from '../../Config';
import { ILike } from '../../../../server/models/Like.interface';
import { useDispatch } from 'react-redux';
import { fetchLikeProjects, fetchLikeUsers } from '../../modules/like';

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
  targetId: null | string;
  isLike: boolean;
}

const LikeButton = ({ isProject, userId, targetId, isLike }: IProps) => {
  const dispatch = useDispatch();
  let formData = {};

  if (isProject) {
    formData = {
      projectId: targetId,
      userId,
    };
  } else {
    formData = {
      recieveduserId: targetId,
      userId,
    };
  }

  const handleUplike = async () => {
    try {
      const {
        data: { success },
      } = await axios.post(`${LIKE_SERVER}/upLike`, formData);
      if (!success) return;
      if (isProject) {
        dispatch(fetchLikeProjects());
      } else {
        dispatch(fetchLikeUsers());
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
      if (!success) return;
      if (isProject) {
        dispatch(fetchLikeProjects());
      } else {
        dispatch(fetchLikeUsers());
      }
    } catch (error) {
      alert(`좋아요 취소에 실패했습니다. ${error}`);
    }
  };

  const onHeartClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (!userId) {
      alert('로그인 후 사용 가능합니다.');
      return;
    }

    if (!isLike) {
      handleUplike();
    } else {
      handleUnLike();
    }
  };

  return <HeartBtn onClick={onHeartClick} isLike={isLike} />;
};

export default LikeButton;
