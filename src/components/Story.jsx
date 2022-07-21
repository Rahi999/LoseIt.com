import React from "react";
import Login from "./Login";
import { Container, Box, Text, Flex, Img } from "@chakra-ui/react";
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
const Story = () => {
  return (
    <>
      <Container minW="100%">
        <Box
          bgColor="#ff9400"
          h="100px"
          p="200px"
          w="90%"
          m="auto"
          mt="20px"
          borderRadius="8px"
          textAlign="center"
        >
          <Heading as="h1" color="white" fontSize="60px">
            We want to hear your story
          </Heading>
        </Box>

        <Box mt="20px">
          <Box>
            <Img
              m="auto"
              w="150px"
              borderRadius="50%"
              src="https://assets.loseit.com/website/story_submission/icon_storysubmission.png"
            />
          </Box>
          <Box w="70%" m="auto" mt="20px" textAlign="center">
            <Text>
              Your incredible accomplishments are what drives the Lose It! team
              to make the best weight loss program possible, and we’d love to
              share your story with other members in hopes of inspiring them,
              too. Whether you’re just beginning your weight loss journey or
              you’ve already reached your goals, we want to hear from you!
            </Text>
            <Text mt="20px">
              These stories are typically shared on our blog, across social
              media, in our newsletters, and with our PR team. Thanks for being
              a part of the Lose It! family and we can’t wait to hear from you.
            </Text>
          </Box>
        </Box>

        <Box
          h="600px"
          p="100px"
          w="90%"
          m="auto"
          mt="50px"
          bgColor="#f1f1f1"
          textAlign="center"
          borderRadius="8px"
        >
          <Text fontSize="40px" color="#183962" mt="-20px">
            Where are you in your weight loss journey?
          </Text>{" "}
          <Text>
            To share your story, simply click on the button below that best
            describes where you are in your weight loss journey and fill out the
            corresponding form.
          </Text>
          <Flex mt="40px">
            <Flex
              ml="20%"
              border="1px solid grey"
              borderRadius="8px"
              bgColor="white"
              w="300px"
              p="15px"
            >
              <Img
                w="80px"
                src="https://assets.loseit.com/website/story_submission/ribbon_beginningjourney.png"
              />{" "}
              <Text color="#ff9400" fontSize="20px">
                I am Just beginning My weight Loss Journey
              </Text>
            </Flex>
            <Flex
              bgColor="white"
              ml="100px"
              border="1px solid grey"
              borderRadius="8px"
              w="300px"
            >
              <Img
                w="80px"
                src="https://assets.loseit.com/website/story_submission/ribbon_beginningjourney.png"
              />{" "}
              <Text color="#ff9400" fontSize="20px">
                I am Working Towards Loss My Weight
              </Text>{" "}
            </Flex>
          </Flex>
          <Flex mt="20px">
            <Flex
              bgColor="white"
              ml="20%"
              border="1px solid grey"
              borderRadius="8px"
              w="300px"
              p="15px"
            >
              <Img
                w="80px"
                src="https://assets.loseit.com/website/story_submission/ribbon_beginningjourney.png"
              />{" "}
              <Text color="#ff9400" fontSize="20px">
                I have Reached My Weight Loss Goal.
              </Text>
            </Flex>
            <Flex
              bgColor="white"
              ml="100px"
              border="1px solid grey"
              borderRadius="8px"
              w="300px"
            >
              <Img
                w="80px"
                src="https://assets.loseit.com/website/story_submission/ribbon_beginningjourney.png"
              />{" "}
              <Text color="#ff9400" fontSize="20px">
                i Am Maintaining My Weight Loss
              </Text>
            </Flex>
          </Flex>
        </Box>

        <Box
          h="100%"
          w="90%"
          m="auto"
          mt="30px"
          p="50px"
          borderRadius="8px"
          textAlign="center"
        >
          <Heading as="h1" color="#183962" fontSize="40px">
            Featured Member Stories
          </Heading>{" "}
          <Text>
            Check out some of our recent stories from our amazing members!
          </Text>
          <SimpleGrid columns={2} gap={6}>
            <Box
              h="100%"
              w="80%"
              m="auto"
              mt="30px"
              bgColor="#f1f1f1"
              borderRadius="8px"
              textAlign="center"
            >
              <Img
                w="100px"
                m="auto"
                mt="20px"
                borderRadius="50%"
                src="https://assets.loseit.com/website/story_submission/member_josh.png"
              />
              <Text color="#183962" mt="20px">
                John Lost 52lbs, his doctor says, he is in best shape of his
                life
              </Text>
            </Box>{" "}
            <Box
              h="100%"
              w="80%"
              m="auto"
              mt="30px"
              bgColor="#f1f1f1"
              borderRadius="8px"
              textAlign="center"
            >
              <Img
                w="100px"
                m="auto"
                mt="20px"
                borderRadius="50%"
                src="https://assets.loseit.com/website/story_submission/member_emily.png"
              />
              <Text color="#183962" mt="20px">
                Emily Partnered with her Husband and Watched 51lbs melt away
              </Text>
            </Box>{" "}
            <Box
              h="100%"
              w="80%"
              m="auto"
              mt="30px"
              bgColor="#f1f1f1"
              borderRadius="8px"
              textAlign="center"
            >
              <Img
                w="100px"
                m="auto"
                mt="20px"
                borderRadius="50%"
                src="https://assets.loseit.com/website/story_submission/member_justin.png"
              />
              <Text color="#183962" mt="20px">
                Meet justin Father, Lose it!, member and Recipi cretor who lost
                100lbs.
              </Text>
            </Box>{" "}
            <Box
              h="100%"
              w="80%"
              m="auto"
              mt="30px"
              bgColor="#f1f1f1"
              borderRadius="8px"
              textAlign="center"
            >
              <Img
                w="100px"
                m="auto"
                mt="20px"
                borderRadius="50%"
                src="https://assets.loseit.com/website/story_submission/member_laura.png"
              />
              <Text color="#183962" mt="20px">
                Laura Stopped Feeding her emotions and dropped 118 lbs
              </Text>
            </Box>{" "}
            <Box
              h="100%"
              w="80%"
              m="auto"
              mt="30px"
              bgColor="#f1f1f1"
              borderRadius="8px"
              textAlign="center"
            >
              <Img
                w="100px"
                m="auto"
                mt="20px"
                borderRadius="50%"
                src="https://assets.loseit.com/website/HIW/advice-premium_clayton.png"
              />
              <Text color="#183962" mt="20px">
                Clayton Joined a Weight Loss Challlenge at work and shed 50lbs
              </Text>
            </Box>{" "}
            <Box
              h="100%"
              w="80%"
              m="auto"
              mt="30px"
              bgColor="#f1f1f1"
              borderRadius="8px"
              textAlign="center"
            >
              <Img
                w="100px"
                m="auto"
                mt="20px"
                borderRadius="50%"
                src="https://assets.loseit.com/website/HIW/advice-free_ashley.png"
              />
              <Text color="#183962" mt="20px">
                Ashley used a Medical Scare as motivation to lose 176lbs
              </Text>
            </Box>{" "}
          </SimpleGrid>
        </Box>
        <Box m="auto" mt="20px" w="20%">
          <Button bgColor="#ff9400" color="white">
            More Stories
          </Button>
        </Box>
      </Container>{" "}
    </>
  );
};

export default Story;
