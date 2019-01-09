import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index';
import { CodingTrainThemeProvider } from '../../helpers/style/theme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CodingTrainThemeProvider>
      <Button
        link="https://thecodingtrain.com/"
        text="Watch on YT"
      />
      <Button
        link="https://thecodingtrain.com/"
        text="subscribe on youtube"
        background="red"
        size="fat"
      />
    </CodingTrainThemeProvider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
