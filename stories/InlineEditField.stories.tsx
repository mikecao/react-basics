import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InlineEditField, TextField } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Input/InlineEditField',
  component: InlineEditField,
} as ComponentMeta<typeof InlineEditField>;

const Template: ComponentStory<typeof InlineEditField> = args => {
  const [value, setValue] = useState('Click to edit');

  return (
    <>
      <p>
        <b>Value: </b>
        <span>{value}</span>
      </p>
      <p>
        <h1>
          <InlineEditField {...args} value={value} onCommit={setValue} />
        </h1>
      </p>
    </>
  );
};

export const Basic = makeStory(Template, {
  args: {},
});
