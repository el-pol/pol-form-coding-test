import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../test-utils';
import userEvent from '@testing-library/user-event';
import FormComponent from './FormComponent';
import { countries, maritalStatus } from '../utils/selectors';

test('Country selector works', async () => {
  const user = userEvent.setup();
  render(<FormComponent />);
  const countrySelector = screen.getByLabelText(/country of work/i);
  await user.selectOptions(countrySelector, countries[0]);
  expect(screen.getByRole('option', { name: countries[0] }).selected).toBe(
    true
  );
  expect(countrySelector.value).toBe(countries[0]);
  await user.selectOptions(countrySelector, countries[1]);
  expect(screen.getByRole('option', { name: countries[1] }).selected).toBe(
    true
  );
  expect(screen.getByRole('option', { name: countries[0] }).selected).toBe(
    false
  );
  expect(countrySelector.value).toBe(countries[1]);
});

test('Conditional fields', async () => {
  const user = userEvent.setup();
  render(<FormComponent />);
  // When the 'Spain' country is selected, the 'social insurance number' field should be visible
  const countrySelector = screen.getByLabelText(/country of work/i);
  await user.selectOptions(countrySelector, countries[0]);
  expect(screen.getByLabelText(/social insurance number/i)).toBeInTheDocument();
  // When the 'Ghana' country is selected, the 'number of children' field should be visible
  await user.selectOptions(countrySelector, countries[1]);
  expect(screen.getByLabelText(/number of children/i)).toBeInTheDocument();
  // When the 'Spain' country is selected, the 'number of children' field should be hidden
  await user.selectOptions(countrySelector, countries[0]);
  expect(
    screen.queryByLabelText(/number of children/i)
  ).not.toBeInTheDocument();
  // When the 'Brazil' country is selected, the 'working hours' field should be visible
  await user.selectOptions(countrySelector, countries[2]);
  expect(screen.getByLabelText(/working hours/i)).toBeInTheDocument();
  // When the 'Ghana' country is selected, the 'working hours' field should be hidden
  await user.selectOptions(countrySelector, countries[1]);
  expect(screen.queryByLabelText(/working hours/i)).not.toBeInTheDocument();
  // When either the 'Spain' or 'Ghana' country is selected, the 'marital status' field should be visible
  await user.selectOptions(countrySelector, countries[0]);
  expect(screen.getByLabelText(/marital status/i)).toBeInTheDocument();
  await user.selectOptions(countrySelector, countries[1]);
  expect(screen.getByLabelText(/marital status/i)).toBeInTheDocument();
  // When neither the 'Spain' nor 'Ghana' country is selected, the 'marital status' field should be hidden
  await user.selectOptions(countrySelector, countries[2]);
  expect(screen.queryByLabelText(/marital status/i)).not.toBeInTheDocument();
});

test('Shows errors when fields are missing', async () => {
  render(<FormComponent />);
  const user = userEvent.setup();

  const countrySelector = screen.getByLabelText(/country of work/i);
  await user.selectOptions(countrySelector, countries[0]);

  await user.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() => {
    expect(screen.getByTestId('firstNameError')).not.toBe(null);
    expect(screen.getByTestId('firstNameError')).toHaveTextContent(
      'Please enter your first name.'
    );
    // For Spain, social insurance number field is required
    expect(screen.getByTestId('socialInsuranceNumberError')).not.toBe(null);
    expect(screen.getByTestId('socialInsuranceNumberError')).toHaveTextContent(
      'Please enter a valid social insurance number.'
    );
  });
});
