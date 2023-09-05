import { createMachine } from "xstate";

export interface MachineContext {
    value: string;
  }
  
  export type MachineEvent =
    { type: 'FOO'; value: string } | { type: 'BAR' }

export const machine = createMachine({
    tsTypes: {} as import("./Machine.typegen").Typegen0,
    schema: {
      context: {} as MachineContext,
      events: {} as MachineEvent,
    },
    initial: 'a',
    states: {
      a: {},
      b: {},
    },
  });