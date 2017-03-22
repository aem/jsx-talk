// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import CodeSlide from 'spectacle-code-slide';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/overrides.css");


const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide transition={[]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/example0.js')}
          ranges={[
            { loc: [0, 8], title: 'Example 0: React' },
            { loc: [0, 2] },
            { loc: [3, 6] },
            { loc: [7, 8] }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/example1.js')}
          ranges={[
            { loc: [0, 9], title: 'Example 1: Custom Pragma'},
            { loc: [0, 1] },
            { loc: [2, 3] },
            { loc: [4, 7] },
            { loc: [8, 9] }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/example2.js')}
          ranges={[
            { loc: [0, 18], title: 'Example 2: Nested Elements' },
            { loc: [0, 1] },
            { loc: [2, 8] },
            { loc: [9, 16] },
            { loc: [17, 18] }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/example3.js')}
          ranges={[
            { loc: [0, 14], title: 'Example 3: Custom Elements' },
            { loc: [0, 1] },
            { loc: [2, 6] },
            { loc: [7, 8] },
            { loc: [9, 12] },
            { loc: [13, 14] }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/example4.js')}
          ranges={[
            { loc: [0, 19], title: "Example 4: Something useful!" },
            { loc: [0, 1] },
            { loc: [2, 3] },
            { loc: [4, 7] },
            { loc: [8, 17] },
            { loc: [18, 19] }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/example5.js')}
          ranges={[
            { loc: [0, 96], title: 'Example 5: Practical application' },
            { loc: [2, 17] },
            { loc: [3, 6] },
            { loc: [7, 16] },
            { loc: [0, 1] },
            { loc: [18, 20] },
            { loc: [21, 32] },
            { loc: [48, 66] },
            { loc: [49, 56] },
            { loc: [56, 64] }
          ]}
        />
      </Deck>
    );
  }
}
