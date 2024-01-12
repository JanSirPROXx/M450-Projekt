import { render, screen } from '@testing-library/react';
import App from '../App';
import axios from 'axios';
import { MemoryRouter, createMemoryHistory } from 'react-router-dom';


//Test für Notes.txt Use Case 1 (User öffnet Website)

describe('Tests for Usecase 1, App.js', () => {
  

// Mock axios
jest.mock('axios');


test('checks if every element renders correctly.', async () => {
  
  axios.get.mockResolvedValueOnce({
    data: [
      "1",
      "2PPUnVD",
      "pF1GmGr",
      "gIqVt8G",
      "i-kILRd",
      "AEbyxkQ",
      "DBupsyd",
      "5766fKE",
      "ur9W2_0",
      "B5DuDGg",
      "iyUB_UI",
      "ju5nCWH"
      ]
  });
  
  
  render(<App />);

  //check if router is rendered
  const routerr = await screen.findByTestId('AppRouterTestId');
  expect(routerr).toBeInTheDocument();

  //check if div rendered
  const div =  await screen.findByTestId('AppDivTestId');
  expect(div).toBeInTheDocument();

  //check if routes rendered
  const routes = await screen.findByTestId('AppRoutesTestId');
  expect(routes).toBeInTheDocument();



});

//Navigation testen über Link
test('navigates to /create', () => {
  render(
    <MemoryRouter initialEntries={['/create']}>
      <App />
    </MemoryRouter>
  );

  
  const createContent = screen.getByTestId('create-site-div');
  expect(createContent).toBeInTheDocument();
});



test('navigates to /meineumfragen', () => {
  render(
    <MemoryRouter initialEntries={['/meineumfragen']}>
      <App />
    </MemoryRouter>
  );

  
  const meineUmfragenContent = screen.getByTestId('meineUmfragen-site-div');
  expect(meineUmfragenContent).toBeInTheDocument();
});




});
