import OnlineBadge from '@/components/OnlineBadge';
import Avatar from '@/components/Avatar';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Component/OnlineBadge',
  component: OnlineBadge,
  argTypes: {
    isOnline: { defaultValue: true, control: 'boolean' },
    isFollowing: { defaultValue: true, control: 'boolean' },
  },
  args: {
    isOnline: true,
    isFollowing: true,
  },
} as Meta;

export const Default: Story = (args) => (
  <OnlineBadge {...args}>
    <Avatar src='https://picsum.photos/200?1' />
  </OnlineBadge>
);
