import styled from 'styled-components';
import { TabItemWrapper } from './TabStyles';
import PropTypes from 'prop-types';
import Text from '../Text';

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
