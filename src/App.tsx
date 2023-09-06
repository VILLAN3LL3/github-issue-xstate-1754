import React from 'react';
import { createActorContext } from '@xstate/react';
import { machine } from './Machine';

export const Context = createActorContext(machine);

export function App() {
  return <Context.Provider options={{ context: { value: "initial value" } }}>
    <ChildComponent />
  </Context.Provider>;
};

export function ChildComponent() {
  const [state, send] = Context.useActor();

  send("BAR");
  return state.matches("a") ? 'Logged In' : 'Logged Out';
}