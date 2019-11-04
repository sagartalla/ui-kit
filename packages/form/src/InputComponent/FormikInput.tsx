import { Formik } from 'formik';
import * as common from '@acko-ui-kit/common';

import { Text } from '@acko-ui-kit/typography';
import Button from '@acko-ui-kit/button';
import React from 'react';

const {
  styled,
  Box,
  $fontSize,
  $neutralColors,
  $error,
  $primaryColors,
  $fontWeightNormal,
  $space,
} = common;

interface Props {
  initialValue?: string;
  name: string;
  placeholder?: string;
  textarea?: boolean;
  validate: (values: { [x: string]: string }) => object;
  buttonText: string;
  handleNext(value: string | undefined): void;
  asyncErrors?: string;
  validateOnBlur?: boolean;
}

interface InputBasicProps {
  isError: boolean | undefined | '';
}

const inputStyles = `
height: 40px;
width: 100%;
border: 1px solid ${$neutralColors.lightest};
border-radius: 8px;
text-align: center;
color: ${$neutralColors.normal};
font-size: ${$fontSize.normal};
font-weight: ${$fontWeightNormal};
:focus {
  outline: none;
  border: 1px solid ${$primaryColors.light};
}
&::-webkit-input-placeholder {
  color: ${$neutralColors.light};
  font-size: ${$fontSize.normal};
  text-align: center;
}
`;

const InputBasic = styled.input<InputBasicProps>`
  ${inputStyles}
  border: 1px solid ${(props: any) =>
    props.isError ? $error : $neutralColors.lightest};
`;

const InputTextArea = styled.textarea`
  ${inputStyles};
  height: inherit;
  padding-left: 1em;
`;

const ErrorText = styled(Text)`
  width: 90%;
  color: ${$error};
  text-align: center;
  margin: ${$space.xs} auto 0;
  text-align: center;
`;

const ButtonContainer = styled(Box)`
  width: 100%;
  margin-top: ${$space.sm};
  display: flex;
  justify-content: center;
`;

function FormikInput(props: Props) {
  const {
    name,
    initialValue,
    placeholder,
    textarea,
    validate,
    buttonText,
    handleNext,
    asyncErrors,
    validateOnBlur,
  } = props;
  const isTextArea = textarea;
  const InputComponent = isTextArea ? InputTextArea : InputBasic;
  const shouldValidateOnBlur = validateOnBlur !== false;
  // const `validateOnChange` = name === 'email'
  return (
    <Formik
      initialValues={{ [name]: initialValue }}
      validate={validate}
      validateOnBlur={shouldValidateOnBlur}
      onSubmit={(values, actions) => {
        handleNext(values[name]);

        actions.setSubmitting(false);
      }}
      render={({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <InputComponent
            id={name}
            placeholder={placeholder}
            name={name}
            value={values[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            isError={errors[name] && touched[name]}
          />
          {errors[name] && touched[name] && (
            <ErrorText size="xxs">{errors[name]}</ErrorText>
          )}
          {asyncErrors && <ErrorText size="xxs">{asyncErrors}</ErrorText>}
          <ButtonContainer>
            {/** TODO: button disabled state might needs to be updated if UI mocks updates */}
            <Button
              type="submit"
              // disabled={isSubmitting || values[name] === ''}
              disabled={isSubmitting}
            >
              {buttonText}
            </Button>
          </ButtonContainer>
        </form>
      )}
    />
  );
};

export default FormikInput;
