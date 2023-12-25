import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../Text';

interface TabItemWrapperProps {
  active: boolean;
}

const TabItemWrapper = styled.div<TabItemWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 60px;
  background-color: ${({ active }) => (active ? '#ddf' : '#eee')};
  cursor: pointer;
`;

interface TabItemProps {
  title: string;
  index: number;
  active: boolean;
  __TYPE?: string;
}

const TabItem = ({ title, index, active, ...props }: TabItemProps) => {
  return (
    <TabItemWrapper active={active} {...props}>
      <Text strong={active}>{title}</Text>
    </TabItemWrapper>
  );
};

TabItem.defaultProps = {
  __TYPE: 'Tab.Item',
};

TabItem.propTypes = {
  __TYPE: PropTypes.oneOf(['Tab.Item']),
};

export default TabItem;
