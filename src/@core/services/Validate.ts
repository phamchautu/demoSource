import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  phone_number: Yup.string().required('Required field'),
  password: Yup.string().required('Required field'),
});

export const KYCSchema = Yup.object().shape({
  numberID: Yup.string().required('Required field'),
  dateRange: Yup.string().required('Required field'),
  address: Yup.string().required('Required field'),
});

export const KYCNextSchema = Yup.object().shape({
  fullname: Yup.string().required('Required field'),
  birthday: Yup.string().required('Required field'),
  gender: Yup.string().required('Required field'),
  address: Yup.string().required(' '),
  cities: Yup.string().required(' '),
  district: Yup.string().required(' '),
  wards: Yup.string().required(' '),
  addressContact: Yup.string().required(' '),
  citiesContact: Yup.string().required(' '),
  districtContact: Yup.string().required(' '),
  wardsContact: Yup.string().required(' '),
});

export const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Required field'),
  newPassword: Yup.string().required('Required field'),
  repeatPassword: Yup.string().required('Required field'),
});
