_Design System Journey_

### INTRO

**Intro**

- my name is dan and I struggle with everything.
- actually a Frontend Engineer at HappyCo working on the platform team.
- somehow HappyCo let me at their Design System.

**Journey to the System**

- Come with us now on a Journey through time and space.

- _brief overview of what we're talking about_
- some of the story of how our current system came about
- approaches found useful
- some quick reflections

### DESIGN SYSTEM, WAT?

**Design System**

- just to clear it up - Design System? What? (Apart from it needing a differnt name)

**What do we mean by Design System**

- good question!
- imagine building blocks
- can use these basic blocks to build a city

**Why a Design System?**

- Consistent UX
- Abstract complexities of cross-browser (ie / safari), accessibility
- Same language spoken across engineering, design, product
- lower barrier∫ to entry for team members.
- keeping lego example, can say "I want 3 windows" - don't need to then build windows and figure out how they might work

### HISTORY/JOURNEY STORY

**Journey so far**

- back to our Design system... how did we get to where we are?

**Early History**

- (well before)
- Each App/Area defined its own custom styling, components
- For short term - is faster

**System v1**

- Some consolidation and shared components/lib
- still scoped at an individual 'App' level
- modified as usecases appeared
- due to no holistic management, quickly drifted, or became prop-party-time
- No feedback loop with design/design tools

**System v2**

- When undertaking a new product set, attempted to collate some of the earlier consolidation work into a 'System' approach
- Added storybook, began cataloging. Started aligning some Design tooling.
- Greater holistic approach, however still not designed from 'ground up' to deal with a System.
- Example of a button with prop-a-rama

**System v3**

- Started brand new feature set with new app - needed to share some core UI across multiple apps and areas.
- Greater emphasis on multiple teams, agility and speed of frontend.
- Also had an opportunity to rethink holisitic approach; composition, lower-level system primitives and composing, remove need for custom CSS.

### APPROACHES

**Approaches**

- So that's how we got here, now for some actual approaches uncovered along the way.

**Influences?**

- First up some thankyou's... i.e. we stole all these ideas.
- Most of the component API is really just React component good practice...

- Braid ( https://seek-oss.github.io/braid-design-system/) heavily influences the majority of our approaches - including layout components and responsive props.
- Styled System (https://styled-system.com/) is some of the base with which Braid is designed from, we often look at implementations within Braid and cross reference with any in Styled System to form our own approach.
- Reach UI (https://reach.tech/) - our ‘complex’ components often use Reach UI components as a base, as they are accessible and designed to be styled/composed as needed. We also use the approach from Reach UI of internal data attribute selectors to override styles of our system components.

**System Component API Approach**

- Semantic Props - Make props align with terminology, especially easier for a Design-centered person to match.
- TS gives us typing, but also reduces available 'settings' for someone implementing.
- Responsive Props.

**Typography Approach**

- Text elements on all text - has handy props like 'truncate'.
- Heading element.
- Cap size, remove ascender/descenders and odd line height spacing... ZOMG

**Layout approach - Layout Components**

- One major change, create systemised layout components
- if familiar with flutter or other UI development - quite common to have component-level layout abstractions.
- we also support ie11 and safari, so need to be careful about how layouts work

**Layout approach - No Margins!@!!**

- For our layouts, we use the rule of no margins - or no surrounding whitespace.
- Margin should be a property of the enclosing container, not the items in it.
- Max Stoiber gives a great quick article on this.

**Layout approach - lol**

- https://mxstbr.com/thoughts/margin/
- lol, response to component style approach https://news.ycombinator.com/item?id=22678348

**Layout approach - examples**

-

**Forms Approach**

- use Formik for forms approach. Really most of the coolness here is due to Formik.
- Not used Formik before - Declarative Form Framework.
- as such provide integrated 'Field' components.
- Formik wrappers on base input components - allows quick creation of forms.
- Generically handle errors in both visuals and form functionality through Formik.

### REFLECTIONS

**Some gripes**

- Design tooling still

**Positives**

- Can implement many pages without a line of custom CSS (i.e. CSS outside of system components).
- Next step allowing rapid iteration prototyping within a tool like playroom.
- Rarely get cross-browser layout issues

### OUTRO

**Outro**

- Thanks for listening! Hope you enjoyed!
- Hit me up on the twits!
- Ill leave with you this..... Questions?

_NOTES->NOTES_

**Flow**

- Design System, wat?
- History/Journey story to current
- Current approaches
- Reflections

**Blurb**

Journey to the System
Time for a trip down Design System lane.... Dan shares some of the history and successful approaches used within the Design System at BLERG. For extra spice, hear some of the arguments for removing CSS from _most_ of your app(s) 😀.

**Refs**

- https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align
- https://mxstbr.com/thoughts/margin/
- https://seek-oss.github.io/capsize/
