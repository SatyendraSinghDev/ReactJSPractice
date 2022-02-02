import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { WelcomeL2 } from "./WelcomeL2";
// import { ToggleButtonL3 } from "./ToggleButtonL3";
// import { UserFormL4 } from "./UserFormL4";
// import { LifecycleMethodWithClassL5 } from './LifecycleMethodWithClassL5';
// import { LifecycleMethodWithFunL6 } from './LifecycleMethodWithFunL6';
// import { ListRenderingL8 } from "./ListRenderingL8";
// import { ListRenderingWithoutKeyL9 } from "./ListRenderingWithoutKeyL9";
// import { CustomHooksL10 } from './CustomHooksL10';
// import { UseRefHookExL11 } from './UseRefHookExL11';
// import { UseReducerHookL12 } from './UseReducerHookL12';
// import { UseContextHookL13 } from './UseContextHookL13';
import { UserContextProvider } from './context/UserContextProvider';
import { UseContextProvider } from './Component/UseContextProvider';
import { AComponent } from './Component/AComponent';

// Normal function in typescript
function sumNormalFun(a: number, b: number) {
  return a + b;
}

// define your props ki kis type ke props hoge apke
// Note in react props are immutable, means we cant change, we can only change the props using then state management

interface Iprops {
  a: number;
  b: number;
}

// props are optional
function SumComponent(props: Iprops) {
  return <>{props.a + props.b}</>
}

function App() {
  const result = sumNormalFun(2, 4);
  return (
    <div className="App">
      <div>Sum from Normal function : {result}</div>
      <div>Sum from SumComponent : <SumComponent a={5} b={6} /></div>
      <hr />
      {/* <WelcomeL2 name="Satty Thakur"></WelcomeL2>
      <hr />
      <WelcomeL2 name="Used Same Component Multiple time with different values"></WelcomeL2>
      <ToggleButtonL3 />
      <UserFormL4 name={''} age={0} /> */}
      {/* <LifecycleMethodWithClassL5 initialvalue={0} /> */}
      {/* <LifecycleMethodWithFunL6 initialvalue={0} /> */}
      {/* <ListRenderingL8 /> */}
      {/* <ListRenderingWithoutKeyL9 /> */}
      {/* <CustomHooksL10 /> */}
      {/* <UseRefHookExL11 /> */}
      {/* <UseReducerHookL12 /> */}
      {/* <UseContextHookL13 /> */}

      <AComponent />
      {/* Add context to top level taki ander ke sabhi components ko wo data mile */}
      <UserContextProvider >
        <UseContextProvider />
      </UserContextProvider>

    </div>
  );
}

export default App;
