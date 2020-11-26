# smak-tooltip

[![NPM](https://img.shields.io/npm/v/smak-tooltip.svg)](https://www.npmjs.com/package/smak-tooltip) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![JavaScript Style Guide](https://img.shields.io/badge/stackblitz-demo-orange.svg)](https://stackblitz.com/edit/smak-tooltip?file=index.tsx)

## Install

npm

```bash
npm install smak-tooltip
```

yarn

```bash
yarn add smak-tooltip
```

> React tooltip component library, Tooltip placement can be configure by passing position property. If there is not enough space then the placement will be auto adjust based on the space available. If no position prop is passed, tooltip will be place dynamically based on the space available on left, top, right and bottom. Styles can be customise by passing elementStyle prop. See IElementStyle interface below

## Props

| Props        | Type                      | Possible values                                            | Required |
| :----------- | :------------------------ | :--------------------------------------------------------- | :------- |
| render       | string or React.ReactNode | 'Tooltip text' or `<span><b>Tooltip</b> text</span>`       | Required |
| children     | string                    | 'Tooltip'                                                  | Required |
| position     | string                    | 'auto' or 'left' or 'right' or 'top' or 'bottom'           | Optional |
| elementStyle | IElementStyle             | {contentStyle: CSSProperties,containerStyle:CSSProperties} | Optional |

## IElementStyle

```ts
interface IElementStyle {
  contentStyle?: CSSProperties;
  containerStyle?: CSSProperties;
}
```

## Usage

```tsx
import React from 'react';

import { Tooltip } from 'smak-tooltip';
import 'smak-tooltip/dist/index.css';

const App = () => {
  const pandemicNode = () => (
    <>
      <h2 style={{ marginTop: '0' }}>pan·dem·ic</h2>
      <small>/panˈdemik/</small>
      <br />
      <i>adjective</i>
      <p>(of a disease) prevalent over a whole country or the world.</p>
      <p style={{ color: 'orange' }}>Similar</p> <span>
        <i>
          <strong>widespread</strong>
        </i>
      </span>
      {', '}
      <span>
        <i>
          <strong>prevalent</strong>
        </i>
      </span>
    </>
  );

  const elementStyle = {
    containerStyle: {
      backgroundColor: 'red',
      width: '300px'
    },
    contentStyle: {
      color: 'yellow',
      fontSize: '1rem'
    }
  };
  return (
    <div style={{ padding: '10px' }}>
      The <Tooltip render='International Cricket Council'>ICC</Tooltip> on
      Friday, 7 August, confirmed the new schedule for major events affected by
      the global <Tooltip render={pandemicNode()}>pandemic</Tooltip>
      .
      <br />
      <br />
      The ICC Men's T20 World Cup 2020, which was supposed to be held in
      Australia in October-November, has been postponed to 2022.
      <br />
      <br />
      The 2021 edition of the T20 World Cup, which was scheduled in <Tooltip
        position='bottom'
        render='India, officially the Republic of India, is a country in South Asia.'
        elementStyle={elementStyle}
      >
        India
      </Tooltip>
      , will take place as planned.
      <br />
      <br />
      The format of the Men’s T20 World Cup 2021 will remain as it was for 2020,
      and all the teams who qualified for the 2020 event will now participate in
      the edition in India. A new qualification process will be run for the ICC Men’s
      T20 World Cup 2022.
      <br />
      <br />
      All fans who purchased tickets to the ICC Men’s T20 World Cup in{' '}
      <Tooltip
        position='left'
        render='Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. '
      >
        Australia
      </Tooltip>
      <br />
      <br />
      tooltip example of rendering on <Tooltip
        position='left'
        render='Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. '
      >
        left
      </Tooltip> side
      <br />
      <br />
      tooltip example of rendering on{' '}
      <Tooltip
        position='right'
        render='Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. '
      >
        right
      </Tooltip>{' '}
      side <br />
      <br />
      tooltip example of rendering on{' '}
      <Tooltip
        position='top'
        render='Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. '
      >
        top
      </Tooltip>
      <br />
      <br />
      tooltip example of rendering on <Tooltip
        position='bottom'
        render='Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. '
      >
        bottom
      </Tooltip>
    </div>
  );
};

export default App;
```

![alt text](https://github.com/ShaileshMak/react-tooltip-library/blob/master/readme-assets/img1.png?raw=true 'smak-tooltip with content')

![alt text](https://github.com/ShaileshMak/react-tooltip-library/blob/master/readme-assets/img2.png?raw=true 'smak-tooltip with HTML')

![alt text](https://github.com/ShaileshMak/react-tooltip-library/blob/master/readme-assets/img3.png?raw=true 'smak-tooltip with content')

![alt text](https://github.com/ShaileshMak/react-tooltip-library/blob/master/readme-assets/left.png?raw=true 'smak-tooltip with left alignment')

![alt text](https://github.com/ShaileshMak/react-tooltip-library/blob/master/readme-assets/right.png?raw=true 'smak-tooltip with right alignment')

![alt text](https://github.com/ShaileshMak/react-tooltip-library/blob/master/readme-assets/top.png?raw=true 'smak-tooltip with top alignment')

![alt text](https://github.com/ShaileshMak/react-tooltip-library/blob/master/readme-assets/bottom.png?raw=true 'smak-tooltip with bottom alignment')

![alt text](https://github.com/ShaileshMak/react-tooltip-library/blob/master/readme-assets/styled.png?raw=true 'smak-tooltip with custom style alignment')

## License

MIT © [ShaileshMak](https://github.com/ShaileshMak)
