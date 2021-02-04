// @ts-nocheck
import nightOwlTheme from "prism-react-renderer/themes/nightOwl";
import React from "react";
import {
  Appear,
  Box,
  CodePane,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  Image,
  ListItem,
  Notes,
  Slide,
  Stepper,
  Text,
  UnorderedList,
} from "spectacle";
import "./styles.css";

const theme = {
  colors: {
    primary: "#F78C6C",
    secondary: "#C792EA",
    tertiary: "#011627",
    quaternary: "#ABB2BF",
    quinary: "#03243E",
  },
  fonts: {
    header:
      'MonoLisa, "Fira Code", "Helvetica Neue", Helvetica, Arial, sans-serif',
    text:
      'MonoLisa, "Fira Code", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: 'MonoLisa, "Fira Code", "Consolas", "Menlo", monospace',
  },
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
      {/* ### INTRO ### */}

      {/* Intro */}
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
        <Notes>
          <p>
            <strong>Intro</strong>
          </p>
          <ul>
            <li>my name is dan and I struggle with everything.</li>
            <li>
              actually a Frontend Engineer at HappyCo, working on our platform
              team.
            </li>
            <li>somehow HappyCo let me at their React Design System.</li>
          </ul>
        </Notes>
      </Slide>
      {/* Overview */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Journey to the System 🚀</Heading>
        </FlexBox>
        <Notes>
          <p>
            <strong>Journey to the System</strong>
          </p>
          <ul>
            <li>
              <p>Come with us now on a Journey through time and space.</p>
            </li>
            <li>
              <p>
                <em>brief overview of what we&#39;re talking about</em>
              </p>
            </li>
            <li>some of the story of how our current system came about</li>
            <li>approaches found useful</li>
            <li>some quick reflections</li>
            <li>
              <p>
                We use react for our frontends - but react is really just an
                implementation detail.
              </p>
            </li>
          </ul>
        </Notes>
      </Slide>

      {/* ### DESIGN SYSTEM, WAT? ### */}

      {/* Design System?? */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Design System 🤔</Heading>
        </FlexBox>
        <Notes>
          <p>
            <strong>Design System</strong>
          </p>
          <ul>
            <li>
              just to clear it up - Design System? What? (Apart from it needing
              a differnt name)
            </li>
          </ul>
        </Notes>
      </Slide>
      {/* What do we mean by Design System? */}
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
        <Notes>
          <p>
            <strong>What do we mean by Design System</strong>
          </p>
          <ul>
            <li>good question!</li>
            <li>imagine building blocks</li>
            <li>
              well formed, fit in a system - created by people who know how to
              build blocks
            </li>
            <li>can use these basic blocks to build a city</li>
          </ul>
        </Notes>
      </Slide>
      {/* Why a Design System? */}
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
        <Notes>
          <p>
            <strong>Why a Design System?</strong>
          </p>
          <ul>
            <li>Consistent UX</li>
            <li>
              Abstract complexities of cross-browser (ie / safari),
              accessibility
            </li>
            <li>Same language spoken across engineering, design, product</li>
            <li>lower barrier∫ to entry for team members.</li>
            <li>
              keeping lego example, can say &quot;I want 3 windows&quot; -
              don&#39;t need to then build windows and figure out how they might
              work
            </li>
          </ul>
        </Notes>
      </Slide>

      {/* ### HISTORY/JOURNEY STORY ### */}

      {/* Journey so far */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>The Journey so far 💇‍♂️</Heading>
        </FlexBox>
        <Notes>
          <p>
            <strong>Journey so far</strong>
          </p>
          <ul>
            <li>
              back to our Design system... how did we get to where we are?
            </li>
          </ul>
        </Notes>
      </Slide>
      {/* History - early, v1, v2 */}
      <Slide>
        <FlexBox height="100%" flexDirection="row" paddingBottom="3rem">
          <Box>
            <Appear
              elementNum={0}
              transitionEffect={{
                to: { opacity: 1, transform: "scale(1)" },
                from: { opacity: 0.2, transform: "scale(0.7)" },
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
                from: { opacity: 0.2, transform: "scale(0.7)" },
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
                from: { opacity: 0.2, transform: "scale(0.7)" },
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
        <Notes>
          <p>
            <strong>Early History</strong>
          </p>
          <ul>
            <li>(well before)</li>
            <li>Each App/Area defined its own custom styling, components</li>
            <li>For short term - is faster</li>
          </ul>
          <p>
            <strong>System v1</strong>
          </p>
          <ul>
            <li>Some consolidation and shared components/lib</li>
            <li>still scoped at an individual &#39;App&#39; level</li>
            <li>modified as usecases appeared</li>
            <li>
              due to no holistic management, quickly drifted, or became
              prop-party-time
            </li>
            <li>No feedback loop with design/design tools</li>
          </ul>
          <p>
            <strong>System v2</strong>
          </p>
          <ul>
            <li>
              When undertaking a new product set, attempted to collate some of
              the earlier consolidation work into a &#39;System&#39; approach
            </li>
            <li>
              Added storybook, began cataloging. Started aligning some Design
              tooling.
            </li>
            <li>
              Greater holistic approach, however still not designed from
              &#39;ground up&#39; to deal with a System.
            </li>
            <li>Example of a button with prop-a-rama</li>
          </ul>
        </Notes>
      </Slide>
      {/* History - v3 */}
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
        <Notes>
          <p>
            <strong>System v3</strong>
          </p>
          <ul>
            <li>
              Started brand new feature set with new app - needed to share some
              core UI across multiple apps and areas.
            </li>
            <li>
              Greater emphasis on multiple teams, agility and speed of frontend.
            </li>
            <li>
              Also had an opportunity to rethink holisitic approach;
              composition, lower-level system primitives and composing, remove
              need for custom CSS.
            </li>
          </ul>
        </Notes>
      </Slide>

      {/* ### APPROACHES ### */}

      {/* Approaches */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>L'approche Système 🧐</Heading>
        </FlexBox>
        <Notes>
          <p>
            <strong>Approaches</strong>
          </p>
          <ul>
            <li>
              So that&#39;s how we got here, now for some actual approaches
              uncovered along the way.
            </li>
          </ul>
        </Notes>
      </Slide>
      {/* Influences */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>
            <del>Stuff we stole</del>
            <br />
            Influences
          </Heading>
          {/* <Link href="https://styled-system.com/">Styled System</Link>
          <Link href="https://seek-oss.github.io/braid-design-system/">
            Braid Design System
          </Link>
          <Link href="https://gist.github.com/ryanflorence/e5c794e6093d16a69fa88d2112a292f7">
            Reach UI
          </Link>
          <Link href="https://every-layout.dev/">every layout</Link> */}
          <UnorderedList>
            <ListItem>Braid Design System</ListItem>
            <ListItem>Styled System</ListItem>
            <ListItem>Reach UI</ListItem>
            <ListItem>every-layout.dev</ListItem>
          </UnorderedList>
        </FlexBox>
        <Notes>
          <p>
            <strong>Influences?</strong>
          </p>
          <ul>
            <li>
              First up some thankyou&#39;s... i.e. we stole all these ideas.
            </li>
            <li>
              <p>
                Most of the component API is really just React component good
                practice...
              </p>
            </li>
            <li>
              <p>
                Braid (https://seek-oss.github.io/braid-design-system/) heavily
                influences the majority of our approaches - including layout
                components and responsive props.
              </p>
            </li>
            <li>
              <p>
                Styled System (https://styled-system.com/) is some of the base
                with which Braid is designed from, we often look at
                implementations within Braid and cross reference with any in
                Styled System to form our own approach.
              </p>
            </li>
            <li>
              Reach UI (https://reach.tech/) - our ‘complex’ components often
              use Reach UI components as a base, as they are accessible and
              designed to be styled/composed as needed. We also use the approach
              from Reach UI of internal data attribute selectors to override
              styles of our system components.
            </li>
          </ul>
        </Notes>
      </Slide>
      {/* System Component API Approach */}
      <Slide>
        <Heading>Component props</Heading>
        <Stepper
          defaultValue={[]}
          values={[
            [2, 8],
            [10, 16],
          ]}
        >
          {(value, step) => (
            <Box paddingLeft="3rem" paddingRight="3rem">
              <CodePane
                highlightStart={value[0]}
                highlightEnd={value[1]}
                fontSize={18}
                language="jsx"
                autoFillHeight={true}
                theme={nightOwlTheme}
              >
                {`
  <Text size="large" weight="bold">
    ...
  </Text>

  <Stack gap={2} align="center">
    ...
  </Stack>

  <Inline align={["center", "left", "left"]}>
    ...
  </Inline>

  <Hidden visible={["visible", "hidden", "visible"]}>
    ...
  </Hidden>
              `}
              </CodePane>

              <Box
                position="absolute"
                bottom="8rem"
                left="6rem"
                right="6rem"
                bg="quinary"
              >
                {step === 0 && (
                  <Text fontSize="1.5rem" margin="0rem">
                    Semantic props - where possible, expose as System
                    tokens/variables.
                  </Text>
                )}

                {step === 1 && (
                  <Text fontSize="1.5rem" margin="0rem">
                    Responsive props - follow System `mobile`, `tablet`,
                    `desktop` breakpoints.
                  </Text>
                )}
              </Box>
            </Box>
          )}
        </Stepper>
        <Notes>
          <p>
            <strong>System Component API Approach</strong>
          </p>
          <ul>
            <li>
              Semantic Props - Make props align with terminology, especially
              easier for a Design-centered person to match.
            </li>
            <li>
              TS gives us typing, but also reduces available &#39;settings&#39;
              for someone implementing.
            </li>
            <li>Responsive Props.</li>
          </ul>
        </Notes>
      </Slide>
      {/* Layout Approach - Layout Components */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Layout Components 🚧</Heading>
        </FlexBox>
        <Notes>
          <p>
            <strong>Layout approach - Layout Components</strong>
          </p>
          <ul>
            <li>One major change, create systemised layout components</li>
            <li>
              if familiar with flutter or other UI development - quite common to
              have component-level layout abstractions.
            </li>
            <li>
              we also support ie11 and safari, so need to be careful about how
              layouts work
            </li>
          </ul>
        </Notes>
      </Slide>
      {/* Layout Approach - No Margins! */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>No Margins 🙅‍♀️</Heading>
        </FlexBox>
        <Notes>
          <p>
            <strong>Layout approach - No Margins!@!!</strong>
          </p>
          <ul>
            <li>
              For our layouts, we use the rule of no margins - or no surrounding
              whitespace.
            </li>
            <li>
              Margin should be a property of the enclosing container, not the
              items in it.
            </li>
            <li>Max Stoiber gives a great quick article on this.</li>
          </ul>
        </Notes>
      </Slide>
      {/* Layout Approach - lol */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Box
            borderLeft="solid"
            borderWidth={4}
            borderColor="secondary"
            margin="2rem"
            padding="0 1rem"
          >
            <Text fontStyle="italic">
              Now I've seen everything.
              <br /> Clearly I'm past my prime. I'm going to give up web
              development and go live in a cave or something.
            </Text>
          </Box>
        </FlexBox>
        <Notes>
          <p>
            <strong>Layout approach - lol</strong>
          </p>
          <ul>
            <li>https://mxstbr.com/thoughts/margin/</li>
            <li>
              lol, response to component style approach
              https://news.ycombinator.com/item?id=22678348
            </li>
          </ul>
        </Notes>
      </Slide>
      {/* Layout Approach - Stack */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Stack</Heading>
          <FlexBox width="100%">
            <Box minWidth="20rem">
              <CodePane
                fontSize={18}
                language="jsx"
                autoFillHeight
                theme={nightOwlTheme}
              >
                {`
  <Stack gap={1}>
    <Box />
    <Box />
    <Box />
  </Stack>
              `}
              </CodePane>
            </Box>
            <FlexBox minWidth="20rem" flexDirection="column">
              <FlexBox
                flexDirection="column"
                border="solid"
                borderWidth={3}
                borderRadius={4}
                borderColor="quinary"
                padding="0.5rem"
                className="stack"
              >
                <Box
                  border="solid"
                  borderWidth={3}
                  borderRadius={4}
                  height="1.25rem"
                  width="10rem"
                />
                <Box
                  border="solid"
                  borderWidth={3}
                  borderRadius={4}
                  height="1.25rem"
                  width="10rem"
                />
                <Box
                  border="solid"
                  borderWidth={3}
                  borderRadius={4}
                  height="1.25rem"
                  width="10rem"
                />
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <p>
            <strong>Layout approach - Stack</strong>
          </p>
          <ul>
            <li>
              Good example of the Layout/Spacer component approach - used to
              &#39;stack&#39; things on top of each other.
            </li>
            <li>
              Elements themselves (orange boxes) are spaced 1rem apart, however
              Stack controls that.
            </li>
            <li>
              e.g. Margin should be a property of the enclosing container, not
              the items in it.
            </li>
            <li>
              uses <em> + </em> lobotomized owl selector to acheive - i.e. just
              css selector and margin on children.
            </li>
          </ul>
        </Notes>
      </Slide>
      {/* Layout Approach - Inline */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Inline</Heading>
          <FlexBox width="100%">
            <Box minWidth="20rem">
              <CodePane
                fontSize={18}
                language="jsx"
                autoFillHeight
                theme={nightOwlTheme}
              >
                {`
  <Inline gap={1}>
    <Box />
    <Box />
    <Box />
  </Inline>
              `}
              </CodePane>
            </Box>
            <FlexBox minWidth="20rem" flexDirection="column">
              <Box
                border="solid"
                borderWidth={3}
                borderRadius={4}
                borderColor="quinary"
              >
                <FlexBox
                  flexDirection="column"
                  padding="0.5rem"
                  className="inline"
                >
                  <Box
                    border="solid"
                    borderWidth={3}
                    borderRadius={4}
                    height="4rem"
                    width="4rem"
                  />
                  <Box
                    border="solid"
                    borderWidth={3}
                    borderRadius={4}
                    height="4rem"
                    width="4rem"
                  />
                  <Box
                    border="solid"
                    borderWidth={3}
                    borderRadius={4}
                    height="4rem"
                    width="4rem"
                  />
                </FlexBox>
              </Box>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <p>
            <strong>Layout approach - Inline</strong>
          </p>
          <ul>
            <li>
              Further example of letting the layout component dictate the
              enclosed items spacing.
            </li>
            <li>Uses a margin offset to allow inline content to wrap.</li>
            <li>
              We also have columns, which allow for horizontal layout /
              &#39;tabular&#39; style layouts.
            </li>
            <li>
              Main idea is that we use layout components to lay out our other
              components.
            </li>
            <li>
              Simple primitives can be combined to create complex layouts.
            </li>
          </ul>
        </Notes>
      </Slide>
      {/* Typography Approach */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Typography</Heading>
          <Box minWidth="40rem" minHeight="18rem">
            <CodePane
              fontSize={18}
              language="jsx"
              autoFillHeight
              theme={nightOwlTheme}
            >
              {`
  <Heading>
    God help us, we're in the hands of engineers.
  </Heading>
  
  <Text>
    Jaguar shark! does it really exist?
  </Text>
              `}
            </CodePane>
          </Box>
        </FlexBox>
        <Notes>
          <p>
            <strong>Typography Approach</strong>
          </p>
          <ul>
            <li>
              Text elements on all text - has handy props like
              &#39;truncate&#39;.
            </li>
            <li>Heading element.</li>
            <li>Sets up (somewhat) for i18n.</li>
          </ul>
        </Notes>
      </Slide>
      {/* Typography Approach - capsize */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Box>
            <Heading>Capsize</Heading>
            <FlexBox>
              <Box minWidth="22rem" position="relative">
                <Appear elementNum={0}>
                  <Box
                    border="solid"
                    borderWidth={3}
                    borderRadius={4}
                    borderColor="quinary"
                    backgroundColor="quinary"
                    height="4.85rem"
                    width="9.5rem"
                    position="absolute"
                    top="2.5rem"
                    left="2.25rem"
                    zIndex="-1"
                  />
                  <Heading color="primary" fontSize="4rem" textAlign="left">
                    Text
                  </Heading>
                </Appear>
                <Appear elementNum={1}>
                  <Box
                    position="absolute"
                    zIndex="-1"
                    border="solid"
                    borderRight="none"
                    borderLeft="none"
                    borderColor="quaternary"
                    height="4.85rem"
                    width="2.5rem"
                    top="2.5rem"
                    left="12.25rem"
                  />
                  <Box
                    position="absolute"
                    zIndex="-1"
                    top="2rem"
                    left="12.25rem"
                  >
                    <Text color="quaternary" fontSize="1.5rem">
                      164px
                    </Text>
                  </Box>
                </Appear>
              </Box>
              <Box minWidth="20rem" position="relative">
                <Appear elementNum={2}>
                  <Box
                    border="solid"
                    borderWidth={3}
                    borderRadius={4}
                    borderColor="quinary"
                    backgroundColor="quinary"
                    height="2.75rem"
                    width="9.5rem"
                    position="absolute"
                    top="3.5rem"
                    right="2.5rem"
                    zIndex="-1"
                  />
                  <Heading color="primary" fontSize="4rem" textAlign="right">
                    Text
                  </Heading>
                </Appear>
                <Appear elementNum={3}>
                  <Box
                    position="absolute"
                    zIndex="-1"
                    border="solid"
                    borderRight="none"
                    borderLeft="none"
                    borderColor="quaternary"
                    height="2.75rem"
                    width="2.5rem"
                    top="3.5rem"
                    right="12.25rem"
                  />
                  <Box
                    position="absolute"
                    zIndex="-1"
                    top="2rem"
                    right="12.25rem"
                  >
                    <Text color="quaternary" fontSize="1.5rem">
                      100px
                    </Text>
                  </Box>
                </Appear>
              </Box>
              {/* <FlexBox minWidth="20rem" flexDirection="column">
                <FlexBox
                  flexDirection="column"
                  border="solid"
                  borderWidth={3}
                  borderRadius={4}
                  borderColor="quinary"
                  padding="0.5rem"
                  className="stack"
                >
                  <Box
                    border="solid"
                    borderWidth={3}
                    borderRadius={4}
                    height="1.25rem"
                    width="10rem"
                  />
                  <Box
                    border="solid"
                    borderWidth={3}
                    borderRadius={4}
                    height="1.25rem"
                    width="10rem"
                  />
                  <Box
                    border="solid"
                    borderWidth={3}
                    borderRadius={4}
                    height="1.25rem"
                    width="10rem"
                  />
                </FlexBox>
              </FlexBox> */}
            </FlexBox>
          </Box>
        </FlexBox>
        <Notes>
          <p>
            <strong>Typography Approach - Capsize</strong>
          </p>
          <ul>
            <li>
              so text renders a little funny on the web when it comes to
              layout/spacing.
            </li>
            <li>
              say we set a Text to 100px high... it actually takes up 164px of
              height when we look in our layout (depending on font).
            </li>
            <li>
              Cap size, remove ascender/descenders and odd line height
              spacing... ZOMG
            </li>
          </ul>
        </Notes>
      </Slide>
      {/* Forms Approach */}
      <Slide>
        <Heading>Forms</Heading>
        <Stepper
          defaultValue={[]}
          values={[
            [2, 5],
            [7, 8],
            [9, 9],
            [14, 14],
            [17, 20],
            [23, 25],
            [28, 39],
          ]}
        >
          {(value, step) => (
            <Box paddingLeft="3rem" paddingRight="3rem" height="30rem">
              <CodePane
                highlightStart={value[0]}
                highlightEnd={value[1]}
                fontSize={18}
                language="jsx"
                autoFillHeight
                theme={nightOwlTheme}
              >
                {`
  <Formik
    initialValues={{ name: "", email: "" }}
    onSubmit={handleSubmit}
  >
    <Form>
      <TextField name="name" />
      <TextField name="email" type="email" />
      <Button type="submit">Submit</Button>
    </Form>
  </Formik>


  <TextField name="name" onFieldChange={makeAnAsyncCallOrSomething} throttleMS={400}/>


  // OG input
  <CheckboxInput />
  // wrapped with Formik 'field' bindings
  <CheckboxField />


  <SignatureField name="signature" />
  <FileField name="fileUpload" />
  <CheckboxField name="jeff" />


  const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  <Formik
    initialValues={{ name: "", email: "" }}
    validationSchema={schema}
  >
    ...
  </Formik>
              `}
              </CodePane>

              <Box
                position="absolute"
                bottom="8rem"
                left="6rem"
                right="6rem"
                bg="quinary"
              >
                {step === 0 && (
                  <Text fontSize="1.5rem" margin="0rem">
                    Formik Form context - handles setup.
                  </Text>
                )}
                {step === 1 && (
                  <Text fontSize="1.5rem" margin="0rem">
                    Fields - use Formik context binding hooks under the hood.
                  </Text>
                )}
                {step === 2 && (
                  <Text fontSize="1.5rem" margin="0rem">
                    Submit like a 'normal' form. EZ 🚢-it
                  </Text>
                )}
                {step === 3 && (
                  <Text fontSize="1.5rem" margin="0rem">
                    Side-effects, throttles .etc all part of prop API for
                    fields.
                  </Text>
                )}
                {step === 4 && (
                  <Text fontSize="1.5rem" margin="0rem">
                    Fields are just wrapped Inputs - allows use of Inputs
                    without Form.
                  </Text>
                )}
                {step === 5 && (
                  <Text fontSize="1.5rem" margin="0rem">
                    Same prop API and 'Field' wrapper for all different input
                    types.
                  </Text>
                )}
                {step === 6 && (
                  <Text fontSize="1.5rem" margin="0rem">
                    Validation using yup 👌
                  </Text>
                )}
              </Box>
            </Box>
          )}
        </Stepper>
        <Notes>
          <p>
            <strong>Forms Approach</strong>
          </p>
          <ul>
            <li>
              use Formik for forms approach. Really most of the coolness here is
              due to Formik.
            </li>
            <li>Not used Formik before - Declarative Form Framework.</li>
            <li>as such provide integrated &#39;Field&#39; components.</li>
            <li>
              Formik wrappers on base input components - allows quick creation
              of forms.
            </li>
            <li>
              Generically handle errors in both visuals and form functionality
              through Formik.
            </li>
          </ul>
        </Notes>
      </Slide>

      {/* ### REFLECTIONS ### */}

      {/* Positives/Negatives */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Reflections 🪞</Heading>
        </FlexBox>
        <Notes>
          <p>
            <strong>Reflections</strong>
          </p>
          <ul>
            <li>Still working on the feedback loop between design tooling.</li>
            <li>
              Have our level of abstraction/primitives pretty well defined...
              but occasionally some slip through / get better insight later.
            </li>
            <li>
              Can implement many pages without a line of custom CSS (i.e. CSS
              outside of system components).
            </li>
            <li>
              Next step allowing rapid iteration prototyping within a tool like
              playroom.
            </li>
            <li>Rarely get cross-browser layout issues</li>
          </ul>
        </Notes>
      </Slide>

      {/* ### OUTRO ### */}

      {/* Outro */}
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
        <Notes>
          <p>
            <strong>Outro</strong>
          </p>
          <ul>
            <li>Thanks for listening! Hope you enjoyed!</li>
            <li>Hit me up on the twits!</li>
            <li>Ill leave with you this..... Questions?</li>
          </ul>
        </Notes>
      </Slide>
      {/* Special Surprise */}
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
    </Deck>
  );
}
export default App;
