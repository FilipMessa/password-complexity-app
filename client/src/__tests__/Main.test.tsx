import { render, fireEvent, waitForElement } from '@testing-library/react';
import Main from '../Main';
import React from 'react';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Main', () => {
  test('render', async () => {
    const { getByText, getByTestId } = render(<Main />);
    const Title = getByText('Password Complexity');
    expect(Title).toBeDefined();

    const input = getByTestId('input-field') as HTMLInputElement;
    expect(input).toBeDefined();

    mockedAxios.post.mockResolvedValueOnce({
      data: {
        score: 1,
        strength: 'Bad',
        statusCode: 200,
      },
    });

    fireEvent.change(input, {
      target: { value: 'ABCD' },
    });

    const Badge = await waitForElement(() => getByText('Bad'));
    expect(Badge).toBeDefined();

    expect(input.value).toMatchInlineSnapshot(`"ABCD"`);
  });
});
