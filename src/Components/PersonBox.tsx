import React from 'react';
import styled from 'styled-components';

const PersonBox = () => (
  <div className="personBox">
    <div className="info">
      <img className="user_img" />
      <div className="user_name">이름</div>
      <div className="use_skill">사용 스택</div>
    </div>
    <div className="currentState">참여 가능합니다</div>
    <button className="more_user_info">유저 정보 보기</button>
  </div>
);
export default PersonBox;
