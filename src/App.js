import React from "react";
import styled from "styled-components"
import Game from "./components/Game";

function App() {
  return (
    <AppContainer className="App">
      <Game />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: auto;
  height: 100vh;
  padding: 0px;
  background-color: #faf8ef;
`

export default App;