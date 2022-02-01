import React, { useState } from 'react';
import styled from 'styled-components';
const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = [{label:'Tab 1',content:'content of tab 1'}, {label:'Tab 2',content:'content of tab 2'},{label:'Tab 3',content:'content of tab 3'},{label:'Tab 4',content:'content of tab 4'}];
export default function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type.label}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type.label}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <p>   {active.content} </p>
    </>
  );
}
// Usage
<TabGroup/>
//export default TabGroup;