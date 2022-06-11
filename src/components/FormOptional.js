import { Field } from 'formik';
import {
  FormControl,
  FormLabel,
  NumberInput,
  FormErrorMessage,
  Select,
  NumberInputField,
  Fade,
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
        <Fade in={isSocialInsurance}>
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
                    placeholder="111234567890"
                    pattern="[0-9]{12}"
                  />
                </NumberInput>
                <FormErrorMessage>
                  {form.errors.socialInsuranceNumber}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </Fade>
      )}
      {isWorkingHours && (
        <Fade in={isWorkingHours}>
          <Field name="workingHours">
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  form.errors.workingHours && form.touched.workingHours
                }
              >
                <FormLabel htmlFor="working-hours">Working hours</FormLabel>
                <NumberInput id="working-hours" min={0}>
                  <NumberInputField
                    {...field}
                    id="working-hours"
                    placeholder="Working hours per month"
                  />
                </NumberInput>
                <FormErrorMessage>{form.errors.workingHours}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </Fade>
      )}
      {isNumberOfChildren && (
        <Fade in={isNumberOfChildren}>
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
                  <NumberInputField {...field} id="number-children" />
                </NumberInput>
                <FormErrorMessage>
                  {form.errors.numberOfChildren}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </Fade>
      )}
      {isMarital && (
        <Fade in={isMarital}>
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
                  placeholder="Select your status"
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
        </Fade>
      )}
    </>
  );
};

export default FormOptional;
