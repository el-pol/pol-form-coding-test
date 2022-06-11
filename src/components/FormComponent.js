import styled from '@emotion/styled';
import { Formik, Form } from 'formik';
import { Button } from '@chakra-ui/react';
import FormOptional from './FormOptional';
import { handleValidation } from '../utils/validation';
import FormCommon from './FormCommon';

// Fixed width and height to prevent layout shifts when adding/removing elements
const StyledForm = styled(Form)`
  width: 350px;
  height: 500px;
`;

const FormComponent = () => {
  const defaultDob = '2022-01-01';
  const countriesWithMaritalStatus = ['Spain', 'Ghana'];

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
