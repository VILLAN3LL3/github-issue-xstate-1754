import React, { createContext, useContext } from 'react';
import { useActor, useInterpret } from '@xstate/react';
import { machine } from './Machine';

export const AuthActorContext = createContext({});

export const GlobalStateProvider = (props) => {
  const authActor = useInterpret(machine); // uses MachineContext, but not MachineEvent

  return (
    <AuthActorContext.Provider value={authActor}>
      {props.children}
    </AuthActorContext.Provider>
  );
};



export const App = () => {
  const authActor = useContext(AuthActorContext);
  // compiler error "no overload matches this call"
  const [state, send] = useActor(authActor); // type of state is any, type of Sender is any => no type safety

  return state.matches('loggedIn') ? 'Logged In' : 'Logged Out';
};
