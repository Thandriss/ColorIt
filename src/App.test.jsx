import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from "./App.jsx";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";

test('file upload', async () => {
    render(<App/>);
    const input = screen.getByLabelText(/Choose a file/i);
    const file = new File(['hello'], 'edited.obj');
    userEvent.upload(input, file);
    userEvent.upload(input, file);
    expect(input.files[0]).toStrictEqual(file);
});

test('generate button click', async () => {
    render(<App/>);
    const spy = jest.spyOn(console, 'log');
    const button = screen.getByText('Generate');
    fireEvent.click(button);
    expect(spy).toBeCalled();
});
