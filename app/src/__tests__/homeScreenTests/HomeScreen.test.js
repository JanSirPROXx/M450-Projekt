import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomeScr from '../../screens/homeScreen/HomeScreen';

describe('Tests for Usecase 2, HomeScreen', () => {
  test('checks if "Umfrage erstellen" button can be clicked', () => {
    render(
      <MemoryRouter>
        <HomeScr />
      </MemoryRouter>
    );

    
    const button = screen.getByText(/Umfrage Erstellen/i);

    
    fireEvent.click(button);

    //create umfrage seite sollte nun angezeigt werden
    const createContent = screen.getByTestId('create-site-div');
    expect(createContent).toBeInTheDocument();
  });

  test('checks if "Meine Umfragen" button can be clicked', () => {
    render(
      <MemoryRouter>
        <HomeScr />
      </MemoryRouter>
    );

    
    const button = screen.getByText(/Meine Umfragen/i);

    
    fireEvent.click(button);

    //create umfrage seite sollte nun angezeigt werden
    const meineUmfragenContent = screen.getByTestId('meineUmfragen-site-div');
    expect(meineUmfragenContent).toBeInTheDocument();
  });

});