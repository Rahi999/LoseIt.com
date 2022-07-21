import React from 'react'
import Login from "./Login"
import SignUp from "./Signup"
import Footer from './Footer'

import { Container, Box, Text, Flex, Img,Stack } from "@chakra-ui/react";
import { Link, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from "@chakra-ui/react";

const Home = () => {

  return (<>
     <Container h="100%" minW="100%" >
    
     

        <Box mt="10px" borderRadius="8px" w="100%" h="20px" color="black" bgColor="#85e0ff" p="40px" >
        <Text  fontSize={{
          base: "13px",
          sm : "13px",
          md: "18px",
          lg: "20px",
          xl: "22px"
        }}>Lose It! is hiring! Click here to see our open positions.</Text>
       </Box>
      
     

       <SimpleGrid mt="20px" h="50px" borderRadius="8px" bgColor="#ff9400"  columns={{
         base: 1,
         sm: 1,
         md: 2,
         lg:2,
         xl: 2
       }}>
        <Box bgColor="#ff9400" textalign="center" p="30px">
          <Img ml="35%" w="40%" h="100%"src="https://assets.loseit.com/website/home/Screenshot_LogScreenFixed.png"/>
        </Box>
        <Stack mt="20px" bgColor="#ff9400" p="30px" >
           <Heading  mt="15px"  fontSize={{
          base: "22px",
          sm : "22px",
          md: "27px",
          lg: "28px",
          xl: "29px"
        }} as="h1" color="#455555" >Top Rated </Heading> 
        <Heading mt="15px" mr="30%" fontSize={{
          base: "22px",
          sm : "22px",
          md: "27px",
          lg: "28px",
          xl: "29px"
        }} as="h1" color="#455555">Weight Loss Plan</Heading>

        <Heading mt="15px" mr="33%" fontSize={{
          base: "17px",
          sm : "17px",
          md: "22px",
          lg: "23px",
          xl: "25px"
        }} as="h1" >Track the foods you love and lose weight</Heading>
        <Box mt="15px" w="40%"><SignUp /></Box>
        </Stack>


        <Box h="400px"></Box>
       </SimpleGrid>

      

     </Container>
     <Box mt="450px"></Box>
     <Box><Footer /></Box>

     </>
  )
}

export default Home