import { render, screen } from '@testing-library/react';
import App from './App'; //import the correct component to test

test('App.js renders the art store', () => { //name test goal clearly 
  render(<App />); //note the component to test
  const hOneTag = screen.getByText(/The art Store/i); //create a variable to contain expected rendered text using regex 
  expect(hOneTag).toBeInTheDocument(); // run the test with expected value 
});
