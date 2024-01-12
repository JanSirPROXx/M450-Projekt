import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React from 'react';
import Create from '../../screens/create/Create';

jest.mock('axios');

describe('Rendern und funktionen von Umfrage erstellen Komponent', () => {
    beforeEach(() => {
        render(<Create />);
    });

    test('renders Create component', () => {
        
        const createdivEl = screen.findByTestId('create-site-div'); //getByTest ist unzuverlässig
        expect(createdivEl).toBeInTheDocument();
    });


    test('renders initial input and buttons', () => {
        expect(screen.getByPlaceholderText('Thema')).toBeInTheDocument();
        expect(screen.getByText('Add Question')).toBeInTheDocument();
        expect(screen.getByText('Submit and copy link')).toBeInTheDocument();
    });

    test('changes input value on typing', () => {
        const inputEl = screen.getByPlaceholderText('Thema');
        userEvent.type(inputEl, 'New Title'); //  insert in inputfield ...
        expect(inputEl.value).toBe('New Title');
    })

    test('adds new question on button click', () => {
        const buttonEl = screen.getByText('Add Question');
        userEvent.click(buttonEl);
        
        expect(screen.getAllByRole('textbox').length).toBe(2);
    });


    test('send data on button click to backend', async () => {
        const postSpy = jest.spyOn(axios, 'post');
        postSpy.mockResolvedValueOnce({ data: { id: '123' } });
        //postSpy.mockResolvedValueOnce({});

        const inputEl = screen.getByPlaceholderText('Thema');
        userEvent.type(inputEl, 'UmfrageTest1');

        const buttonEl = screen.getByText('Submit and copy link');
        userEvent.click(buttonEl);

        await waitFor(() => expect(postSpy).toHaveBeenCalledTimes(2));

        expect(postSpy).toHaveBeenCalledWith('http://localhost:3003/api/add', expect.objectContaining({ name: 'UmfrageTest1' }));
        expect(postSpy).toHaveBeenCalledWith('http://localhost:3003/api/setupAnswers/123');

        expect(screen.getByText('https://localhost:3000/123')).toBeInTheDocument();
    });

});

