import styled from '@emotion/styled';
import { Formik, Form, Field } from 'formik';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  FormErrorMessage,
  Select,
  NumberInputField,
} from '@chakra-ui/react';
import FormOptional from './FormOptional';
import { countries } from '../utils/countries';

// Fixed width and height to prevent layout shifts when adding/removing elements
const StyledForm = styled(Form)`
  width: 350px;
  height: 500px;
`;

const FormCommon = () => {
  const countriesWithMaritalStatus = ['Spain', 'Ghana'];
  const defaultDob = '2022-01-01';

  const handleValidation = values => {
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
      errors.holidayAllowance = 'Please enter a value';
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
        'Please enter a valid social insurance number.';
    }

    if (values.countryOfWork === 'Ghana' && !values.numberOfChildren) {
      errors.numberOfChildren = 'Please fill out this field.';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{
        countryOfWork: '',
        firstName: '',
        lastName: '',
        dob: defaultDob,
        holidayAllowance: '',
        socialInsuranceNumber: '',
        workingHours: '',
        numberOfChildren: '',
        maritalStatus: '',
      }}
      validate={handleValidation}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
        <StyledForm>
          <Field name="countryOfWork">
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  form.errors.countryOfWork && form.touched.countryOfWork
                }
              >
                <FormLabel htmlFor="country-of-work">Country of work</FormLabel>
                <Select
                  {...field}
                  id="country-of-work"
                  placeholder="Select country"
                >
                  {countries.map(country => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{form.errors.countryOfWork}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="firstName">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.firstName && form.touched.firstName}
              >
                <FormLabel htmlFor="country-of-work">First name</FormLabel>
                <Input {...field} id="first-name" placeholder="John" />
                <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="lastName">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.lastName && form.touched.lastName}
              >
                <FormLabel htmlFor="last-name">Last name</FormLabel>
                <Input {...field} id="last-name" placeholder="Doe" />
                <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="dob">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.dob && form.touched.dob}>
                <FormLabel htmlFor="dob">Date of birth</FormLabel>
                <Input
                  type="date"
                  {...field}
                  id="dob"
                  placeholder="Date of birth"
                />
                <FormErrorMessage>{form.errors.dob}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="holidayAllowance">
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  form.errors.holidayAllowance && form.touched.holidayAllowance
                }
              >
                <FormLabel htmlFor="holiday-allowance">
                  Holiday allowance
                </FormLabel>
                <NumberInput id="holiday-allowance" min={0}>
                  <NumberInputField
                    {...field}
                    id="holiday-allowance"
                    placeholder="In number of days"
                  />
                </NumberInput>
                <FormErrorMessage>
                  {form.errors.holidayAllowance}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <FormOptional
            isSocialInsurance={props.values.countryOfWork === 'Spain'}
            isMarital={countriesWithMaritalStatus.includes(
              props.values.countryOfWork
            )}
            isNumberOfChildren={props.values.countryOfWork === 'Ghana'}
            isWorkingHours={props.values.countryOfWork === 'Brazil'}
            selectedCountry={props.values.countryOfWork}
          />
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default FormCommon;
