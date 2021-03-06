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
import { maritalStatus } from '../utils/selectors';

const FormOptional = ({
  isSocialInsurance,
  isMarital,
  isWorkingHours,
  isNumberOfChildren,
}) => {
  return (
    <>
      {isSocialInsurance && (
        <Fade in={isSocialInsurance}>
          <Field name="socialInsuranceNumber">
            {({ field, form }) => (
              <FormControl
                mt={4}
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
                <FormErrorMessage data-testid="socialInsuranceNumberError">
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
                mt={4}
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
                mt={4}
                isInvalid={
                  form.errors.numberOfChildren && form.touched.numberOfChildren
                }
              >
                <FormLabel htmlFor="number-children">
                  Number of children
                </FormLabel>
                <NumberInput
                  {...field}
                  id="number-children"
                  onChange={val => form.setFieldValue(field.name, val)}
                  min={0}
                >
                  <NumberInputField placeholder="Number of children" />
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
                mt={4}
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
                  {maritalStatus.map(status => (
                    <option key={status} value={status}>
                      {status}
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
