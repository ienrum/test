import Button from '@/components/Button/Index';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'ghost', 'text', 'danger'],
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'regular', 'wide'],
    },
    event: {
      control: 'select',
      options: ['enabled', 'hover', 'click', 'focus', 'disabled'],
    },
    isArrow: {
      control: 'boolean',
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    type: 'primary',
    size: 'small',
    event: 'enabled',
    isArrow: false,
    children: 'Button',
  },
} as Meta;

export const Default: Story = (args) => (
  <Button {...args}>{args.children}</Button>
);
