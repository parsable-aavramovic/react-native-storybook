import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import Button from '.';

storiesOf('Button', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)

  .add('Primary', () => (
    <Button 
      primary
      title='Button Primary'
      onPress={action('clicked-text')}
    />
  ))

  .add('Secondary', () => (
    <Button 
      secondary
      title='Button Secondary'
      onPress={action('clicked-text')}
    />
  ))

  .add('Disabled', () => (
    <Button 
      disabled
      title='Button Disabled'
      onPress={action('clicked-text')}
    />
  ))
