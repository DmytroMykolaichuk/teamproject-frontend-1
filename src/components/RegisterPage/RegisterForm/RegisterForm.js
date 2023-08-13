import { useDispatch } from 'react-redux';
import { Formik} from "formik";
import * as yup from "yup";
import {
  FormWrapper,
  FormTitle,
  Form,
  FieldWrapper,
  FormLabel,
  FormField,
  FormButton,
  ErrorText,
  SuccessText,
  Icon,
  ErrorIcon,
  SuccessIcon
} from "./RegisterForm.styled";
import icon from "assets/icons/symbol-defs.svg";

import { register } from 'redux/auth/operations';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('This is an ERROR email')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Must be at least 7 characters long')
    .required('Password is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(register(values));
    resetForm();
  };

  return (
    <FormWrapper>
      <FormTitle>Sign Up</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form autoComplete="off">
            <FieldWrapper
              className={`${formik.touched.name && formik.errors.name
                ? 'error'
                : formik.touched.name && !formik.errors.name
                  ? 'success'
                  : ''}`}
            >
              <FormLabel htmlFor="name">Name</FormLabel>
              <ErrorIcon width="20" height="20" status="error">
                <use href={icon + "#icon-Vector"}></use>
              </ErrorIcon>
              <SuccessIcon width="20" height="20" status="success">
                <use href={icon + "#icon-Vector-1"}></use>
              </SuccessIcon>
              <FormField 
                id="name"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorText name="name" component="div" />
            </FieldWrapper>
            <FieldWrapper
              className={`${formik.touched.email && formik.errors.email
                ? 'error'
                : formik.touched.email && !formik.errors.email
                  ? 'success'
                  : ''}`}
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <ErrorIcon width="20" height="20" status="error">
                <use href={icon + "#icon-Vector"}></use>
              </ErrorIcon>
              <SuccessIcon width="20" height="20" status="success">
                <use href={icon + "#icon-Vector-1"}></use>
              </SuccessIcon>
              <FormField
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <ErrorText name="email" component="div" />
              {formik.touched.email && !formik.errors.email && (
                <SuccessText>This is a CORRECT email</SuccessText>
              )}
            </FieldWrapper>
            <FieldWrapper
              className={`${formik.touched.password && formik.errors.password
                ? 'error'
                : formik.touched.password && !formik.errors.password
                  ? 'success'
                  : ''}`}
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <ErrorIcon width="20" height="20" status="error">
                <use href={icon + "#icon-Vector"}></use>
              </ErrorIcon>
              <SuccessIcon width="20" height="20" status="success">
                <use href={icon + "#icon-Vector-1"}></use>
              </SuccessIcon>
              <FormField
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
              />
              <ErrorText name="password" component="div" />
            </FieldWrapper>
            <FormButton type="submit">
              <span>Sign Up</span>
              <Icon width="20" height="20">
                <use href={icon + "#icon-login"}></use>
              </Icon>
            </FormButton>
          </Form>
        )}      
      </Formik>
    </FormWrapper>
  );
};
export default RegisterForm;