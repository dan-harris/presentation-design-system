import React from "react";
import {
  Deck,
  Slide,
  Heading,
  Text,
  Link,
  CodePane,
  Progress,
  Box,
  FlexBox,
  FullScreen,
  Stepper,
  Image,
  Appear
} from "spectacle";
import nightOwlTheme from "prism-react-renderer/themes/nightOwl";
import "./styles.css";

const theme = {
  colors: {
    primary: "#F78C6C",
    secondary: "#C792EA",
    tertiary: "#011627",
    quaternary: "#ABB2BF",
    quinary: "#03243E"
  },
  fonts: {
    header:
      'MonoLisa, "Fira Code", "Helvetica Neue", Helvetica, Arial, sans-serif',
    text:
      'MonoLisa, "Fira Code", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: 'MonoLisa, "Fira Code", "Consolas", "Menlo", monospace'
  }
};

const Template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1.5rem">
      <FullScreen color="#03243E" size={30} />
    </Box>
    <Box padding="0 1.5rem">
      <FlexBox flexDirection="column" alignItems="flex-end">
        <Text
          color="#d1d3d4"
          fontSize={20}
          textAlign="right"
          padding="0.75rem 0"
          margin="0 0"
        >
          @danharris_io
        </Text>
        {/* <Progress color="#03243E" size={14} /> */}
      </FlexBox>
    </Box>
  </FlexBox>
);

function App() {
  return (
    <Deck theme={theme} template={Template}>
      {/* ### INTRO */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Box
            border="solid"
            borderWidth={4}
            borderRadius="50%"
            width="20%"
            overflow="hidden"
          >
            <Image src="./profile-le-good.jpg" width="100%" height="100%" />
          </Box>
          <Heading>Dan Harris</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Journey to the System 🚀</Heading>
        </FlexBox>
      </Slide>

      {/* ### DESIGN SYSTEM, WAT? */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Design System 🤔</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="row">
          <Box width="17rem" height="13rem">
            <Appear elementNum={0}>
              <Box
                width="17rem"
                height="13rem"
                border="solid"
                borderWidth={4}
                borderRadius={4}
                overflow="hidden"
              >
                <Image src="./lego-blocks.png" width="100%" />
              </Box>
            </Appear>
          </Box>
          <Text>
            <Appear elementNum={1}>{"=>"}</Appear>
          </Text>
          <Box width="17rem" height="13rem">
            <Appear elementNum={1}>
              <Box
                width="17rem"
                height="13rem"
                border="solid"
                borderWidth={4}
                borderRadius={4}
                overflow="hidden"
              >
                <Image src="./lego-city.png" width="100%" />
              </Box>
            </Appear>
          </Box>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Box
            border="solid"
            borderWidth={4}
            borderRadius={4}
            width="45%"
            height="66%"
            overflow="hidden"
          >
            <Image src="./lego-city-instructions.png" width="100%" />
          </Box>
        </FlexBox>
      </Slide>

      {/* ### HISTORY/JOURNEY STORY */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>The Journey so far 💇‍♂️</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="row" paddingBottom="3rem">
          <Box>
            <Appear
              elementNum={0}
              transitionEffect={{
                to: { opacity: 1, transform: "scale(1)" },
                from: { opacity: 0.2, transform: "scale(0.7)" }
              }}
            >
              <Box
                width="13rem"
                height="13rem"
                border="solid"
                borderWidth={4}
                borderRadius="50%"
                overflow="hidden"
              >
                <Box marginLeft="-15%" marginTop="-45%">
                  <Image src="./delorean-0.png" width="140%" />
                </Box>
                <Box position="absolute" left="3rem" top="14rem">
                  <Text>v??</Text>
                </Box>
              </Box>
            </Appear>
          </Box>
          <Text>
            <Appear elementNum={1}>{"=>"}</Appear>
          </Text>
          <Box>
            <Appear
              elementNum={1}
              transitionEffect={{
                to: { opacity: 1, transform: "scale(1)" },
                from: { opacity: 0.2, transform: "scale(0.7)" }
              }}
            >
              <Box
                width="13rem"
                height="13rem"
                border="solid"
                borderWidth={4}
                borderRadius="50%"
                overflow="hidden"
              >
                <Box marginLeft="-10%">
                  <Image src="./delorean-1.jpg" width="150%" />
                </Box>
                <Box position="absolute" left="3.25rem">
                  <Text>v1</Text>
                </Box>
              </Box>
            </Appear>
          </Box>
          <Text>
            <Appear elementNum={2}>{"=>"}</Appear>
          </Text>
          <Box>
            <Appear
              elementNum={2}
              transitionEffect={{
                to: { opacity: 1, transform: "scale(1)" },
                from: { opacity: 0.2, transform: "scale(0.7)" }
              }}
            >
              <Box
                width="13rem"
                height="13rem"
                border="solid"
                borderWidth={4}
                borderRadius="50%"
                overflow="hidden"
              >
                <Box marginLeft="-60%">
                  <Image src="./delorean-2.png" width="110%" />
                </Box>
                <Box position="absolute" left="3.25rem">
                  <Text>v2</Text>
                </Box>
              </Box>
            </Appear>
          </Box>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Box>
            <Box
              width="17rem"
              height="17rem"
              border="solid"
              borderWidth={4}
              borderRadius="50%"
              overflow="hidden"
            >
              <Box marginLeft="0%" marginTop="0%">
                <Image src="./delorean-3.jpg" width="140%" />
              </Box>
            </Box>
          </Box>
          <Heading>The System (v3)</Heading>
        </FlexBox>
      </Slide>

      {/* ### RANDS DELETEME 🚯 */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Box border="solid" borderWidth={4} borderRadius={4} width="70%">
            <Image
              src="https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg"
              width="100%"
            />
          </Box>
        </FlexBox>
      </Slide>
      <Slide>
        <Heading>code blocks</Heading>
        <Stepper
          defaultValue={[]}
          values={[
            [1, 1],
            [3, 6],
            [8, 11]
          ]}
        >
          {(value, step) => (
            <>
              <CodePane
                highlightStart={value[0]}
                highlightEnd={value[1]}
                fontSize={18}
                language="jsx"
                autoFillHeight={true}
                theme={nightOwlTheme}
              >
                {`
  <Slide>
    <FlexBox height="100%" flexDirection="column">
      <Heading>Welcome to Spectacle 1 =&gt;</Heading>
      <Text>my text</Text>
    </FlexBox>
  </Slide>
  <Slide>
    <Heading>Welcome to Spectacle 2 =&gt;</Heading>
    <Text>my text</Text>
  </Slide>
              `}
              </CodePane>

              <Box
                position="absolute"
                bottom="8rem"
                left="3rem"
                right="3rem"
                bg="quinary"
              >
                {/* This notes container won't appear for step 0 */}

                {step === 1 && (
                  <Text fontSize="1.5rem" margin="0rem">
                    This is a note!
                  </Text>
                )}

                {step === 2 && (
                  <Text fontSize="1.5rem" margin="0rem">
                    You can use the stepper state to render whatever you like as
                    you step through the code.
                  </Text>
                )}
              </Box>
            </>
          )}
        </Stepper>
      </Slide>
    </Deck>
  );
}
export default App;
