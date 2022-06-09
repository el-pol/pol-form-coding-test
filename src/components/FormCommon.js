import { Formik, Form, Field } from 'formik';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormErrorMessage,
  Select,
  NumberInputField,
} from '@chakra-ui/react';

const FormCommon = () => {
  const countries = ['Spain', 'Ghana', 'Brazil'];

  const checkEmpty = value => {
    let error;
    if (!value) {
      error = 'Please fill out this field';
    }
    return error;
  };

  return (
    <Formik
      initialValues={{
        countryOfWork: '',
        firstName: '',
        lastName: '',
        dob: '2000-01-01',
        holidayAllowance: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
        <Form>
          <Field name="countryOfWork" validate={checkEmpty}>
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
          <Field name="firstName" validate={checkEmpty}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.firstName && form.touched.firstName}
              >
                <FormLabel htmlFor="country-of-work">First name</FormLabel>
                <Input {...field} id="first-name" placeholder="First name" />
                <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="lastName" validate={checkEmpty}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.lastName && form.touched.lastName}
              >
                <FormLabel htmlFor="last-name">Last name</FormLabel>
                <Input {...field} id="last-name" placeholder="Last name" />
                <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="dob" validate={checkEmpty}>
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
          <Field name="holidayAllowance" validate={checkEmpty}>
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  form.errors.holidayAllowance && form.touched.holidayAllowance
                }
              >
                <FormLabel htmlFor="holiday-allowance">
                  Holiday allowance
                </FormLabel>
                <NumberInput id="holiday-allowance">
                  <NumberInputField
                    {...field}
                    id="holiday-allowance"
                    placeholder="Holiday allowance"
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage>
                  {form.errors.holidayAllowance}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormCommon;