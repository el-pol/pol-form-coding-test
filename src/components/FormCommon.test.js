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
