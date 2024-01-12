import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Question from '../../screens/create/Question';

describe('Question component', () => {
    beforeEach(() => {
        render(<Question question={{ id: 1 }} />);
    });

    test('renders Question komponentn', () => {
        const questionDiv = screen.getByText('1. Frage ...');
        expect(questionDiv).toBeInTheDocument();
    });

    test('renders init  input and select', () => {
        expect(screen.getByPlaceholderText('Type your question')).toBeInTheDocument();
        expect(screen.getByText('Textantwort')).toBeInTheDocument();
        expect(screen.getByText('Multiple Choice')).toBeInTheDocument();
    });

    test('changes selected wert', () => {
        userEvent.selectOptions(screen.getByRole('combobox'), ['multiple-choice']);
        expect(screen.getByText('Add Option')).toBeInTheDocument();
    });

    test(' button click event test', () => {
        userEvent.selectOptions(screen.getByRole('combobox'), ['multiple-choice']);
        userEvent.click(screen.getByText('Add Option'));
        expect(screen.getAllByRole('textbox').length).toBe(3);
    });

    
});