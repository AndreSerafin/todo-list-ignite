import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { CenterDiv, Wrapper } from './styles';
import { HeaderComponent } from './components/Header/HeaderComponent';
import { TasksContainer } from './components/TasksContainer/TasksContainer';

function App() {
  return (
    <>
      <HeaderComponent />
      <Wrapper>
        <CenterDiv>
          <TasksContainer />
        </CenterDiv>
      </Wrapper>
    </>
  );
}

export default App;
