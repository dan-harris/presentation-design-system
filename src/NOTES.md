_Design System Journey_

**Intro**

**Journey to the System**

- brief overview of what we're talking about

**What do we mean by Design System**

- good question!

**Why a Design System?**

- Consistent UX
- Abstract complexities of cross-browser (ie / safari), accessibility
- Same language spoken across engineering, design, product
- lower barrier to entry for team members.

**UI triangle??**

- Good User Experience
- Cheap Maintenance
- Fast Performance

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

**Approaches**

- _??_ Need to segue from history to our approaches now....

**Semantic Props**

- Make props align with terminology, especially easier for a Design-centered person to match.
- Responsive props.
- TS gives us typing, but also reduces available 'settings' for someone implementing.

**Typography Approach**

- Text elements on all text - truncate.
- Cap size, remove ascender/descenders and odd line height spacing... ZOMG

**Layout approach**

- One major change, create systemised layout components
- if familiar with flutter or other UI development - quite common
- we also support ie11 and safari, so need to be careful about how layouts work
- lol, response to component style approach https://news.ycombinator.com/item?id=22678348
- https://mxstbr.com/thoughts/margin/
- Margin should be a property of the enclosing container, not the items in it.
- https://seek-oss.github.io/braid-design-system/
- Braid ( https://seek-oss.github.io/braid-design-system/) heavily influences the majority of our approaches - including layout components and responsive props.
- Styled System (https://styled-system.com/) is some of the base with which Braid is designed from, we often look at implementations within Braid and cross reference with any in Styled System to form our own approach.
- example?

**Forms Approach**

- Reach UI (https://reach.tech/) - our ‘complex’ components often use Reach UI components as a base, as they are accessible and designed to be styled/composed as needed. We also use the approach from Reach UI of internal data attribute selectors to override styles of our system components.

**TODO?**

- _??_ forms approach? Formik?
- _??_ downsides?
- _??_ how it has affected development?
- _??_ wrap up
