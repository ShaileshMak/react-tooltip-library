import React from 'react';

import { Tooltip, IElementStyle } from 'smak-tooltip';
import 'smak-tooltip/dist/index.css';

const App = () => {
  const pandemicNode = () => (
    <>
      <h2 style={{ marginTop: '0' }}>pan·dem·ic</h2>
      <small>/panˈdemik/</small>
      <br />
      <i>adjective</i>
      <p>(of a disease) prevalent over a whole country or the world.</p>
      <p style={{ color: 'orange' }}>Similar</p>{' '}
      <span>
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

  const elementStyle: IElementStyle = {
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
      The 2021 edition of the T20 World Cup, which was scheduled in{' '}
      <Tooltip
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
      the edition in India. A new qualification process will be run for the ICC
      Men’s T20 World Cup 2022.
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
      tooltip example of rendering on{' '}
      <Tooltip
        position='left'
        render='Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. '
      >
        left
      </Tooltip>{' '}
      side
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
      tooltip example of rendering on{' '}
      <Tooltip
        position='bottom'
        render='Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. '
      >
        bottom
      </Tooltip>
    </div>
  );
};

export default App;
