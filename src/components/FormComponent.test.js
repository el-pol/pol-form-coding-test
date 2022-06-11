import React from 'react';
import { screen, waitFor, debug } from '@testing-library/react';
import { render } from '../test-utils';
import userEvent from '@testing-library/user-event';
import FormComponent from './FormComponent';
import { countries, maritalStatus } from '../utils/selectors';

test('Country selector works', async () => {
  render(<FormComponent />);
  const countrySelector = screen.getByLabelText(/country of work/i);
  await userEvent.selectOptions(countrySelector, countries[0]);
  expect(screen.getByRole('option', { name: countries[0] }).selected).toBe(
    true
  );
  expect(countrySelector.value).toBe(countries[0]);
  await userEvent.selectOptions(countrySelector, countries[1]);
  expect(screen.getByRole('option', { name: countries[1] }).selected).toBe(
    true
  );
  expect(screen.getByRole('option', { name: countries[0] }).selected).toBe(
    false
  );
  expect(countrySelector.value).toBe(countries[1]);
});

test('Conditional fields', async () => {
  render(<FormComponent />);
  // When the 'Spain' country is selected, the 'social insurance number' field should be visible
  const countrySelector = screen.getByLabelText(/country of work/i);
  await userEvent.selectOptions(countrySelector, countries[0]);
  expect(screen.getByLabelText(/social insurance number/i)).toBeInTheDocument();
  // When the 'Ghana' country is selected, the 'number of children' field should be visible
  await userEvent.selectOptions(countrySelector, countries[1]);
  expect(screen.getByLabelText(/number of children/i)).toBeInTheDocument();
  // When the 'Spain' country is selected, the 'number of children' field should be hidden
  await userEvent.selectOptions(countrySelector, countries[0]);
  expect(
    screen.queryByLabelText(/number of children/i)
  ).not.toBeInTheDocument();
  // When the 'Brazil' country is selected, the 'working hours' field should be visible
  await userEvent.selectOptions(countrySelector, countries[2]);
  expect(screen.getByLabelText(/working hours/i)).toBeInTheDocument();
  // When the 'Ghana' country is selected, the 'working hours' field should be hidden
  await userEvent.selectOptions(countrySelector, countries[1]);
  expect(screen.queryByLabelText(/working hours/i)).not.toBeInTheDocument();
  // When either the 'Spain' or 'Ghana' country is selected, the 'marital status' field should be visible
  await userEvent.selectOptions(countrySelector, countries[0]);
  expect(screen.getByLabelText(/marital status/i)).toBeInTheDocument();
  await userEvent.selectOptions(countrySelector, countries[1]);
  expect(screen.getByLabelText(/marital status/i)).toBeInTheDocument();
  // When neither the 'Spain' nor 'Ghana' country is selected, the 'marital status' field should be hidden
  await userEvent.selectOptions(countrySelector, countries[2]);
  expect(screen.queryByLabelText(/marital status/i)).not.toBeInTheDocument();
});

test('Submitting the form with the correct values', async () => {
  const handleSubmit = jest.fn();
  render(<FormComponent onSubmit={handleSubmit} />);
  // const user = userEvent.setup();

  const countrySelector = screen.getByLabelText(/country of work/i);
  await userEvent.selectOptions(countrySelector, countries[0]);
  const maritalSelector = screen.getByLabelText(/marital status/i);
  await userEvent.type(screen.getByLabelText(/first name/i), 'Tim');
  await userEvent.type(screen.getByLabelText(/last name/i), 'Peach');
  await userEvent.type(screen.getByLabelText(/date of birth/i), '2020-01-01');
  await userEvent.type(screen.getByLabelText(/holiday allowance/i), '30');
  await userEvent.type(
    screen.getByLabelText(/social insurance number/i),
    '000000000000'
  );
  await userEvent.selectOptions(maritalSelector, maritalStatus[0]);

  await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      countryOfWork: countries[0],
      firstName: 'Tim',
      lastName: 'Peach',
      dob: '2020-01-01',
      holidayAllowance: '30',
      socialInsuranceNumber: '000000000000',
      workingHours: '',
      numberOfChildren: '',
      maritalStatus: maritalStatus[0],
    })
  );
});
