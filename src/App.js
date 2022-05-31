import React, { useEffect } from "react";
import styled from "styled-components"
import Game from "./components/Game";

function App() {
  useEffect(() => {
    {!localStorage.getItem("data") && localStorage.setItem("data", JSON.stringify({1: {1: 2, 2: 4}, 2: {1: 16, 3: 16}}))}
  }, [])
  
  return (
    <AppContainer className="App">
      <Game />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: auto;
  height: max-content;
  min-height: 100vh;
  padding: 0px;
  background-color: #faf8ef;
`

export default App;