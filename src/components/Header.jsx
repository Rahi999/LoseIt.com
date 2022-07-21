import React from 'react'
import Login from "./Login"
import SignUp from "./Signup"
import Footer from './Footer'
import {NavLink} from "react-router-dom"

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

const Header = () => {
  return (
    <>
    
    
    <Flex w="90%" m="auto" bgColor="#f1f1f1" borderRadius="8px"  >
          <Box ml="10%">
            <Img
              w="90%"
              mt="10px"
              src="https://i0.wp.com/loseitblog.com/wp-content/uploads/2019/05/60x60.png?fit=60%2C60&ssl=1"
            />
          </Box>
          <Box ml="30%">
            <Tabs mt="-10px">
              <TabList>
                <Tab>
                  <NavLink to="/" isExternal>
                    Home 
                  </NavLink>
                </Tab>
                <Tab>
                  <Menu>
                    <MenuButton >
                      Categories
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Corporate Updates</MenuItem>
                      <MenuItem>Tech & Science</MenuItem>
                      <MenuItem>Nutrition & Fitness</MenuItem>
                      <MenuItem>Lose It Recipies</MenuItem>
                      <MenuItem>Success Stories</MenuItem>
                    </MenuList>
                  </Menu>
                </Tab>
                <Tab>
                  <Menu>
                    <MenuButton >
                      About Us 
                    </MenuButton>
                    <MenuList>
                      <MenuItem>LoseIt.com</MenuItem>
                      <MenuItem>About The Writters</MenuItem>
                    </MenuList>
                  </Menu>
                </Tab>
                <Tab>
                  <Login />
                </Tab>
               
              </TabList>
            </Tabs>
          </Box>
        </Flex></>
  )
}

export default Header