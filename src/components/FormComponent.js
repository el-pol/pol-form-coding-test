import styled from '@emotion/styled';
import { Formik, Form } from 'formik';
import { Button, useToast } from '@chakra-ui/react';
import FormOptional from './FormOptional';
import {
  countriesWithMaritalStatus,
  defaultDob,
  handleValidation,
} from '../utils/validation';
import FormCommon from './FormCommon';

// Fixed width and height to prevent layout shifts when adding/removing elements
const StyledForm = styled(Form)`
  width: 350px;
  height: 500px;
`;

const FormComponent = () => {
  const toast = useToast();

  const handleSubmit = (values, actions) => {
    // We already handle invalid fields with our validation
    // Here we only clean up the form so we don't submit empty fields
    const selectedCountry = values.countryOfWork;
    const valuesWithoutEmptyFields = Object.keys(values).reduce((acc, key) => {
      if (values[key]) {
        acc[key] = values[key];
      }
      if (selectedCountry !== 'Spain' && key === 'socialInsuranceNumber') {
        return acc;
      }
      if (selectedCountry !== 'Ghana' && key === 'numberOfChildren') {
        return acc;
      }
      if (selectedCountry !== 'Brazil' && key === 'workingHours') {
        return acc;
      }
      if (
        !countriesWithMaritalStatus.includes(selectedCountry) &&
        key === 'maritalStatus'
      ) {
        return acc;
      }
      return acc;
    }, {});

    setTimeout(() => {
      console.log(JSON.stringify(valuesWithoutEmptyFields, null, 2));
      actions.setSubmitting(false);
      toast({
        title: 'Form successfully submitted!',
        description: 'One of our agents will be in touch soon.',
        status: 'success',
        position: 'top',
        duration: 9000,
        isClosable: true,
      });
      actions.resetForm();
    }, 1000);
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
      onSubmit={handleSubmit}
    >
      {props => (
        <>
          <StyledForm>
            <FormCommon {...props} />
            <FormOptional
              {...props}
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
        </>
      )}
    </Formik>
  );
};

export default FormComponent;
