import Button from '@/components/Button/Index';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    styleType: {
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
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
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
    styleType: 'primary',
    size: 'small',
    event: 'enabled',
    type: 'button',
    isArrow: false,
    children: 'Button',
  },
} as Meta;

export const Default: Story = (args) => (
  <form>
    <Button {...args}>{args.children}</Button>
  </form>
);
