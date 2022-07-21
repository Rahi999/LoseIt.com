import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Box, Text, Flex, Img } from "@chakra-ui/react";
import { Link, Button, Heading } from "@chakra-ui/react";
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
import SignUp from "./Signup";
const GetTips = () => {
  return (
    <>
      <Container minW="100%">
        <Box
          mt="10px"
          textAlign="center"
          borderRadius="8px"
          bgColor="#ff9400"
          h="100px"
          p="250px"
        >
          <Heading fontSize="45px" as="h1" color="white">
            The Secret Ingredient
          </Heading>
          <Text fontSize="25px" color="#183962">
            Powered by Lose It!
          </Text>
        </Box>
        <Box fontSize="25px" p="100px" textAlign="center">
          <Text>
            Here at Lose It!, we know the key to a healthy lifestyle is balance.
            In this blog, we’re dishing out our Company Updates, Health &
            Wellness, and Tech & Science articles to give you a healthy dose of
            all things Lose It!
          </Text>
          <Text color="#ff9400">– Cheers, and enjoy.</Text>
        </Box>
        <Box textAlign="center">
          <Heading color="#183962" as="h1">
            Recipies
          </Heading>
          <Flex w="100%" mt="20px">
            <Box bgColor="black" color="white" w="50%">
              <Link href="https://loseitblog.com/2022/07/13/3-dinner-ideas-when-you-dont-know-what-to-make/">
                {" "}
                <Img
                  w="120%"
                  h="80%"
                  src="https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-891629998.jpg?fit=1024%2C683&ssl=1"
                />
                <Text>
                  Recipes 3 Dinner Ideas When You Don’t Know What to Make 3
                  Dinner Ideas When You Don’t Know What to Make
                </Text>
              </Link>
            </Box>
            <Box w="50%">
              <Flex gap={3}>
                {" "}
                <Box bgColor="black" color="white" w="50%">
                  <Link href="https://loseitblog.com/2022/07/07/how-to-make-a-simple-salad-dressing-for-any-occasion/">
                    {" "}
                    <Img
                      w="60"
                      src="https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1373260075.jpg?fit=1024%2C683&ssl=1"
                    />
                    <Text>
                      How To Make A Simple Salad Dressing For Any Occasion
                    </Text>
                  </Link>
                </Box>
                <Box bgColor="black" color="white" w="50%">
                  <Link href="https://loseitblog.com/2022/07/02/cheers-2022s-summer-time-drink-is-officially-here/">
                    {" "}
                    <Img
                      w="60"
                      src="https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/06/GettyImages-1352566547.jpg?fit=1024%2C683&ssl=1"
                    />
                    <Text>
                      Cheers, 2022’s Summer Time Drink is Officially Here
                    </Text>
                  </Link>
                </Box>
              </Flex>
              <Flex>
                {" "}
                <Box bgColor="black" color="white" w="50%">
                  <Link href="https://loseitblog.com/2022/07/07/hello-from-lisbon-4-international-desserts-were-enjoying/">
                    {" "}
                    <Img
                      w="60"
                      src="https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1176762073.jpg?fit=1024%2C683&ssl=1"
                    />
                    <Text>
                      Hello from Lisbon: 4 International Desserts We’re Enjoying
                    </Text>
                  </Link>
                </Box>
                <Box bgColor="black" color="white" w="50%">
                  <Link href="https://loseitblog.com/2022/06/27/5-salads-to-enjoy-on-repeat-this-summer/">
                    {" "}
                    <Img
                      w="60"
                      src="https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/06/GettyImages-1322712309.jpg?fit=1024%2C683&ssl=1"
                    />
                    <Text>5 Salads to Enjoy on Repeat This Summer</Text>
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box mt="20px" textAlign="center">
          <Button bgColor="#ff9400" color="white">
            See More Recipies
          </Button>
        </Box>
        <Box textAlign="center" mt="30px">
          <Heading color="#183962" as="h1">
            Nutrition & Fitness
          </Heading>

          <Flex gap={4} mt="20px">
            <Box
              h="400px"
              ml="10px"
              border="1px solid grey"
              borderRadius="10px"
            >
              <Link href="https://loseitblog.com/2022/07/13/3-dinner-ideas-when-you-dont-know-what-to-make/">
                {" "}
                <Img
                  h="250px"
                  borderRadius="8px"
                  // w="100%"
                  // h="80%"
                  src="https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-891629998.jpg?fit=1024%2C683&ssl=1"
                />
                <Text color="#ff9400">
                  3 Dinner Ideas When You Don’t Know What to Make
                </Text>
                <Text color="#ff9400">Read More</Text>
              </Link>
            </Box>
            <Box
              h="400px"
              ml="10px"
              border="1px solid grey"
              borderRadius="10px"
            >
              {" "}
              <Link href="https://loseitblog.com/2022/07/12/4-reasons-youre-not-losing-weight-with-intermittent-fasting/">
                {" "}
                <Img
                  h="250px"
                  borderRadius="8px"
                  // w="100%"
                  // h="80%"
                  src="https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1036554940.jpg?fit=300%2C200&ssl=1"
                />
                <Text color="#ff9400">
                  4 Reasons You’re Not Losing Weight With Intermittent Fasting
                </Text>{" "}
                <Text color="#ff9400">Read More</Text>
              </Link>
            </Box>
            <Box
              h="400px"
              ml="10px"
              border="1px solid grey"
              borderRadius="10px"
            >
              <Link href="https://loseitblog.com/2022/07/12/im-a-dietitian-and-i-tried-intermittent-fasting-for-21-days-heres-what-happened/">
                {" "}
                <Img
                  h="250px"
                  borderRadius="8px"
                  // w="100%"
                  // h="80%"
                  src="https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/07/GettyImages-1280247430.jpg?fit=300%2C200&ssl=1"
                />
                <Text color="#ff9400">
                  I’m a Dietitian and I Tried Intermittent Fasting for 21 Days,
                  Here’s What Happened
                </Text>{" "}
                <Text color="#ff9400">Read More</Text>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box mt="30px" textAlign="center">
          <Button bgColor="#ff9400" color="white" mb="20px">
            See More
          </Button>
        </Box>{" "}
        <hr />
        <Box mt="40px" textAlign="center">
          <Img
            m="auto"
            src="https://i0.wp.com/loseitblog.com/wp-content/uploads/2022/02/LoseIt_July21_54.jpg?resize=768%2C513&ssl=1"
          />
          <Heading mt="15px" as="h1" color="#183962">
            Corporate Updates
          </Heading>
          <Text mt="15px">
            Get the buzz on our company culture, what our employees are up to,
            and the exciting projects we’re doing to impact the world.
          </Text>
        </Box>{" "}
        <Box mt="30px" textAlign="center">
          <Button bgColor="#ff9400" color="white" mb="20px">
            Read More
          </Button>
        </Box>{" "}
      </Container>
    </>
  );
};

export default GetTips;
