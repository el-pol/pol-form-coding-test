export const countriesWithMaritalStatus = ['Spain', 'Ghana'];
export const defaultDob = '2022-01-01';

export const handleValidation = values => {
  const errors = {};
  if (!values.countryOfWork) {
    errors.countryOfWork = 'Please select your country of work.';
  }
  if (!values.firstName) {
    errors.firstName = 'Please enter your first name.';
  }
  if (!values.lastName) {
    errors.lastName = 'Please enter your last name.';
  }
  if (values.dob === defaultDob) {
    errors.dob = 'Please enter your date of birth.';
  }

  if (values.countryOfWork === 'Spain' && values.holidayAllowance < 30) {
    errors.holidayAllowance =
      'Please enter a value greater than 30 if your country is Spain.';
  } else if (
    values.countryOfWork === 'Brazil' &&
    values.holidayAllowance > 40
  ) {
    errors.holidayAllowance =
      'Please enter a value smaller than 40 if your country is Brazil.';
  } else if (!values.holidayAllowance) {
    errors.holidayAllowance = 'Please enter a value.';
  }

  if (
    countriesWithMaritalStatus.includes(values.countryOfWork) &&
    !values.maritalStatus
  ) {
    errors.maritalStatus = 'Please select your marital status.';
  }

  if (
    values.countryOfWork === 'Spain' &&
    (!values.socialInsuranceNumber ||
      values.socialInsuranceNumber.length !== 12)
  ) {
    errors.socialInsuranceNumber =
      'Please enter a valid social insurance number. Your number should be 12 digits long.';
  }

  if (values.countryOfWork === 'Ghana' && !values.numberOfChildren) {
    errors.numberOfChildren = 'Please fill out this field.';
  }

  return errors;
};
