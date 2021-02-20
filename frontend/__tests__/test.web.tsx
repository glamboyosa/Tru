import React from 'react';
import renderer from 'react-test-renderer';
import Splash from '../screens/SplashScreen';
describe('Web Test', ()=> {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test('renders correctly', () => {
  
    const tree = renderer.create(<Splash />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
