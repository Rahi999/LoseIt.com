import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home";
import { Input, Box, Text } from "@chakra-ui/react";
import GetTips from "./components/getTips";
import Routing from "./components/Routes";
import FooterForAll from "./components/FooterForAll";
import Header from "./components/Header";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <Container minW="95%" m="auto">
          {" "}
          <Routing />
        </Container>

        {/* <GetTips /> */}
        <FooterForAll />
      </ChakraProvider>
    </div>
  );
}

export default App;
