import styled from 'styled-components';

interface TabItemWrapperProps {
  active: boolean;
}

export const TabItemWrapper = styled.div<TabItemWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 60px;
  background-color: ${({ active }) => (active ? '#ddf' : '#eee')};
  cursor: pointer;
`;

export const TabItemContainer = styled.div`
  border-bottom: 2px solid #ddd;
  background-color: #eee;
`;
