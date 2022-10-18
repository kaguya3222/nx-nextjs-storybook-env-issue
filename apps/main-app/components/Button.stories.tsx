import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

const meta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

const DefaultTemplate: ComponentStory<typeof Button> = (args) => {
  return <Button />;
};

export const Default = DefaultTemplate.bind({});
