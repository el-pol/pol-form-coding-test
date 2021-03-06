import { Field } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  FormErrorMessage,
  Select,
  NumberInputField,
} from '@chakra-ui/react';
import { countries } from '../utils/selectors';
import { startOfToday, format } from 'date-fns';

const FormCommon = () => {
  return (
    <>
      <Field name="countryOfWork">
        {({ field, form }) => (
          <FormControl
            isInvalid={form.errors.countryOfWork && form.touched.countryOfWork}
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
            mt={4}
            isInvalid={form.errors.firstName && form.touched.firstName}
          >
            <FormLabel htmlFor="first-name">First name</FormLabel>
            <Input {...field} id="first-name" placeholder="John" />
            <FormErrorMessage data-testid="firstNameError">
              {form.errors.firstName}
            </FormErrorMessage>
          </FormControl>
        )}
      </Field>
      <Field name="lastName">
        {({ field, form }) => (
          <FormControl
            mt={4}
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
          <FormControl isInvalid={form.errors.dob && form.touched.dob} mt={4}>
            <FormLabel htmlFor="dob">Date of birth</FormLabel>
            <Input
              type="date"
              {...field}
              max={format(startOfToday(), 'yyyy-MM-dd')}
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
            mt={4}
            isInvalid={
              form.errors.holidayAllowance && form.touched.holidayAllowance
            }
          >
            <FormLabel htmlFor="holiday-allowance">Holiday allowance</FormLabel>
            <NumberInput
              {...field}
              id="holiday-allowance"
              onChange={val => form.setFieldValue(field.name, val)}
              min={0}
            >
              <NumberInputField placeholder="In number of days" />
            </NumberInput>
            <FormErrorMessage>{form.errors.holidayAllowance}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </>
  );
};

export default FormCommon;
