import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  background-color: ${(props) => (props.isToggled ? '#000' : '#fff')};
  border-radius: 20px;
  padding: 4px;
`;

const ToggleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isToggled ? 'flex-end' : 'flex-start')};
  width: 40px;
  height: 20px;
  background-color: ${(props) => (props.isToggled ? '#fff' : '#000')};
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
`;

const SunIcon = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: yellow;
  border-radius: 50%;
`;

const MoonIcon = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: gray;
  border-radius: 50%;
`;

const ToggleButton = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <ToggleWrapper onClick={handleToggle} isToggled={isToggled}>
      <ToggleIcon isToggled={isToggled}>
        {isToggled ? <MoonIcon /> : <SunIcon />}
      </ToggleIcon>
    </ToggleWrapper>
  );
};

export default ToggleButton;

