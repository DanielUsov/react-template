import { Center, PinInput } from '@mantine/core';
import { type JSX } from 'react';

export const StartPage = (): JSX.Element => {
  return (
    <Center>
      <PinInput length={5} />
    </Center>
  );
};
