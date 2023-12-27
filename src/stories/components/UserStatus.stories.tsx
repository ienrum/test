import UserStatus from '@/components/UserStatus';

export default {
  title: 'Component/UserStatus',
  component: UserStatus,
  argTypes: {},
  args: {},
} as Meta;

export const Default: Story = (args) => <UserStatus {...args} />;
