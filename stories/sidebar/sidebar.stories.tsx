import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sidebar from 'components/sidebar';

export default {
  title: 'allPages/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Expanded = Template.bind({});
Expanded.args = {
  collapsed: false,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  collapsed: true,
};
