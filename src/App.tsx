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
  Image
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
      '"Fira Code", MonoLisa, "Helvetica Neue", Helvetica, Arial, sans-serif',
    text:
      '"Fira Code", MonoLisa, "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Fira Code", MonoLisa, "Consolas", "Menlo", monospace'
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
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>welcome to spectacle 1 =&gt;</Heading>
          <Text>my text</Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>welcome to spectacle 2 =&gt;</Heading>
          <Text>my text</Text>
        </FlexBox>
      </Slide>
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
