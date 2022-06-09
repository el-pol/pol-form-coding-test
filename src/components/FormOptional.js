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

const FormOptional = ({
  isSocialInsurance,
  isMarital,
  isWorkingHours,
  isNumberOfChildren,
}) => {
  // Typical values, can be changed to whatever you want
  const status = ['Married', 'Single', 'Divorced'];

  return (
    <>
      {isSocialInsurance && (
        <Field name="socialInsuranceNumber">
          {({ field, form }) => (
            <FormControl
              isInvalid={
                form.errors.socialInsuranceNumber &&
                form.touched.socialInsuranceNumber
              }
            >
              <FormLabel htmlFor="social-number">
                Social insurance number
              </FormLabel>
              <NumberInput id="social-number" min={0}>
                <NumberInputField
                  {...field}
                  id="social-number"
                  placeholder="Your social insurance number"
                />
              </NumberInput>
              <FormErrorMessage>
                {form.errors.socialInsuranceNumber}
              </FormErrorMessage>
            </FormControl>
          )}
        </Field>
      )}
      {isWorkingHours && (
        <Field name="workingHours">
          {({ field, form }) => (
            <FormControl
              isInvalid={form.errors.workingHours && form.touched.workingHours}
            >
              <FormLabel htmlFor="working-hours">Working hours</FormLabel>
              <NumberInput id="working-hours" min={0}>
                <NumberInputField
                  {...field}
                  id="working-hours"
                  placeholder="In number of hours"
                />
              </NumberInput>
              <FormErrorMessage>{form.errors.workingHours}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
      )}
      {isNumberOfChildren && (
        <Field name="numberOfChildren">
          {({ field, form }) => (
            <FormControl
              isInvalid={
                form.errors.numberOfChildren && form.touched.numberOfChildren
              }
            >
              <FormLabel htmlFor="number-children">
                Number of children
              </FormLabel>
              <NumberInput id="number-children" min={0}>
                <NumberInputField
                  {...field}
                  id="number-children"
                  placeholder="0"
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>
                {form.errors.numberOfChildren}
              </FormErrorMessage>
            </FormControl>
          )}
        </Field>
      )}
      {isMarital && (
        <Field name="maritalStatus">
          {({ field, form }) => (
            <FormControl
              isInvalid={
                form.errors.maritalStatus && form.touched.maritalStatus
              }
            >
              <FormLabel htmlFor="marital-status">Marital status</FormLabel>
              <Select
                {...field}
                id="marital-status"
                placeholder="Marital status"
              >
                {status.map(country => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{form.errors.maritalStatus}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
      )}
    </>
  );
};

export default FormOptional;
