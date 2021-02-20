import React from 'react';
import Splash from '../screens/SplashScreen';
import { render } from '@testing-library/react-native';
import { MemoryRouter, Router } from 'react-router-native';
import { createMemoryHistory } from 'history';
import Register from '../screens/Register';
it('should render splash correctly', () => {
  const { getByText } = render(<Splash />, { wrapper: MemoryRouter });
  expect(getByText(`Let's get started 🔥`)).not.toBeNull();
});
it('should navigate to register', async () => {
  const history = createMemoryHistory();
  const route = '/register';
  history.push(route);
  const { getByPlaceholderText } = render(
    <Router history={history}>
      <Register />
    </Router>,
  );

  expect(getByPlaceholderText('ex. (415) 555-0100')).not.toBeNull();
});
