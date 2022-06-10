import React from 'react';
import { screen, waitFor, debug } from '@testing-library/react';
import { render } from '../test-utils';
import userEvent from '@testing-library/user-event';
import FormCommon from './FormCommon';
import { countries } from '../utils/countries';

test('Country selector works', async () => {
  render(<FormCommon />);
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
  render(<FormCommon />);
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

// test('rendering and submitting a basic Formik form', async () => {
//   const handleSubmit = jest.fn();
//   render(<FormCommon onSubmit={handleSubmit} />);
//   const user = userEvent.setup();

//   await user.type(screen.getByLabelText(/first name/i), 'John');
//   await user.type(screen.getByLabelText(/last name/i), 'Dee');
//   await user.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com');

//   await user.click(screen.getByRole('button', { name: /submit/i }));

//   await waitFor(() =>
//     expect(handleSubmit).toHaveBeenCalledWith({
//       email: 'john.dee@someemail.com',
//       firstName: 'John',
//       lastName: 'Dee',
//     })
//   );
// });
