import Rating from '@mui/material/Rating';
import * as Yup from 'yup';
import icon from 'assets/icons/symbol-defs.svg';
import {
  CancelBtn,
  DeleteBtn,
  EditBtn,
  FormFieldReview,
  Icon,
  SaveBtn,
  TextFeedback,
  TextReview,
  WrapControlBtn,
} from './FeedbackForm.styled';
import { useState } from 'react';
import { Form, Formik, useField } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addReview, deleteReview, editReview } from 'redux/reviews/operations';
import { selectUserReview } from 'redux/reviews/selectors';

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <TextFeedback className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const FeedbackForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const isFeedback = useSelector(selectUserReview);

  const [ratingValue, setRatingValue] = useState(5);

  const [isEdit, setisEdit] = useState(false);

  return (
    <Formik
      initialValues={{
        rating: isFeedback.length === 0 ? ratingValue : isFeedback[0].rating,
        feedbacText: isFeedback.length === 0 ? '' : isFeedback[0].review,
      }}
      validationSchema={Yup.object({
        rating: Yup.number().required('Required'),
        feedbacText: Yup.string()
          .max(300, 'Must be 300 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, e) => {
        if (!isEdit) {
          dispatch(
            addReview({
              rating: ratingValue,
              review: values.feedbacText,
            })
          );
        } else {
          dispatch(
            editReview({
              rating: ratingValue,
              review: values.feedbacText,
            })
          );
        }

        setisEdit(false);

        // closeModal();
      }}
    >
      <Form>
        <TextReview>Rating</TextReview>
        {isFeedback.length === 0 || isEdit ? (
          <label>
            <Rating
              name="rating"
              defaultValue={
                isFeedback.length === 0 ? ratingValue : isFeedback[0].rating
              }
              onChange={(event, newValue) => {
                console.log(newValue);
                setRatingValue(newValue);
                console.log(ratingValue);
              }}
            />
          </label>
        ) : (
          <Rating name="rating" value={isFeedback[0].rating} readOnly />
        )}
        <FormFieldReview>
          <TextReview>Review</TextReview>
          {(isFeedback.length || isEdit) && (
            <>
              <EditBtn
                onClick={() => {
                  setisEdit(true);
                }}
                type="button"
              >
                <Icon width={16} height={16}>
                  <use href={icon + '#icon-pencil-01'}></use>
                </Icon>
              </EditBtn>
              <DeleteBtn
                onClick={() => {
                  dispatch(deleteReview());
                  setisEdit(false);
                  closeModal();
                  console.log('delete feedback');
                }}
                type="button"
              >
                <Icon width={16} height={16}>
                  <use href={icon + '#icon-trash-2'}></use>
                </Icon>
              </DeleteBtn>
            </>
          )}
        </FormFieldReview>

        <TextArea
          disabled={!(isFeedback.length === 0) && !isEdit}
          name="feedbacText"
          rows="6"
          placeholder="Enter text"
        />

        {(!isFeedback.length || isEdit) && (
          <WrapControlBtn>
            <SaveBtn type="submit">{isEdit ? 'Edit' : 'Save'}</SaveBtn>
            <CancelBtn onClick={closeModal} type="button">
              Cancel
            </CancelBtn>
          </WrapControlBtn>
        )}
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
