﻿import styled from 'styled-components';
import React, { useMemo, useState } from 'react';
import TabItem from './TabItem';

type ChildrenToArray = (
  children: React.ReactNode,
  types: string | string[],
) => React.ReactElement[];
const childrenToArray: ChildrenToArray = (children, types) => {
  return React.Children.toArray(children).filter((element) => {
    if (React.isValidElement(element) && types.includes(element.props.__TYPE)) {
      return true;
    }

    console.warn(
      `Only accepts ${
        Array.isArray(types) ? types.join(', ') : types
      } as it's children.`,
    );
    return false;
  }) as React.ReactElement[];
};

const TabItemContainer = styled.div`
  border-bottom: 2px solid #ddd;
  background-color: #eee;
`;

interface TabProps {
  children: React.ReactNode;
  active?: number;
}

const Tab = ({ children, active, ...props }: TabProps) => {
  const [currentActive, setCurrentActive] = useState(() => {
    if (active) {
      return active;
    } else {
      const index = childrenToArray(children, 'Tab.Item')[0].props.index;
      return index;
    }
  });

  const items = useMemo(() => {
    return childrenToArray(children, 'Tab.Item').map((element) => {
      return React.cloneElement(element, {
        ...element.props,
        key: element.props.index,
        active: element.props.index === currentActive,
        onClick: () => {
          setCurrentActive(element.props.index);
        },
      });
    });
  }, [children, currentActive]);

  const activeItem = useMemo(
    () => items.find((element) => currentActive === element.props.index),
    [currentActive, items],
  );

  return (
    <div>
      <TabItemContainer>{items}</TabItemContainer>
      <div>{activeItem && activeItem.props.children}</div>
    </div>
  );
};

Tab.Item = TabItem;

export default Tab;
