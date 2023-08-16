import { device } from 'constants';
import styled from 'styled-components';

export const FormFieldReview = styled.div`
  display: flex;
  justify-content: start;
  align-items: baseline;
  margin-top: 15px;

  @media (min-width: ${device.tablet}px) {
    margin-top: 20px;
  }
`;

export const EditBtn = styled.button`
  margin-left: auto;
  margin-right: 8px;
  display: flex;
  width: 30px;
  height: 30px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #e3f3ff;
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #3e85f3;

  &:hover,
  &:focus {
    background: #3e85f3;
    color: #ffffff;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: rgba(234, 61, 101, 0.2);
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #dcebf7;
  }
`;

export const Icon = styled.svg`
  stroke: currentColor;
  fill: none;
`;

export const TextReview = styled.p`
  margin-bottom: 8px;
  color: rgba(52, 52, 52, 0.8);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
`;

export const TextFeedback = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 14px 18px;
  border-color: transparent;
  border: none;
  border-radius: 8px;
  background: #f6f6f6;
  resize: none;
  outline: none;

  color: #343434;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
`;

export const WrapControlBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;

  @media (min-width: ${device.tablet}px) {
    margin-top: 18px;
  }
`;

export const SaveBtn = styled.button`
  width: 144px;
  height: 42px;
  border: none;
  border-radius: 8px;
  background: #3e85f3;

  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #0f5dc8;
  }

  @media (min-width: ${device.tablet}px) {
    width: 198px;
    height: 48px;
  }
`;

export const CancelBtn = styled.button`
  width: 144px;
  height: 42px;
  border: none;
  border-radius: 8px;
  background: #e5edfa;

  color: #343434;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #d6dde9;
  }

  @media (min-width: ${device.tablet}px) {
    width: 198px;
    height: 48px;
  }
`;

export const Error = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: ${p => p.theme.authFieldOnErrorColor};
  line-height: 1.16;
`;

export const IconStar = styled.svg`
  margin-right: 2px;
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: none;
`;
