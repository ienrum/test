import React from 'react';
import { Meta, Story } from '@storybook/react';
import Grass, { GrassProps } from '../../components/Grass';

export default {
  title: 'Component/Grass',
  component: Grass,
} as Meta;

const Template: Story<GrassProps> = (args) => <Grass {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 10,
  height: 3,
  colors: ['#98c379', '#2ecc71'],
  filledIndices: [0, 1, 2, 10, 11, 12, 20, 21, 22],
};
