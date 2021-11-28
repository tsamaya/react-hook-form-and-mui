import React from 'react';
import ReactDOM from 'react-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Company from './Company';
import Address from './Address';

import './styles.css';
import { Button } from '@mui/material';

function App() {
  console.log(`App.render()`);
  const SignupSchema = yup.object().shape({
    name: yup.string().required(),
    address: yup.string().required(),
    currency: yup.string().required(),
    date: yup.date().required(),
  });

  const methods = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues: {
      name: '',
      address: '',
      currency: '',
      date: new Date(),
    },
  });
  const { handleSubmit } = methods;

  const onsubmit = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onsubmit)}>
        <Company />
        <Address />
        <Button type="submit">Register</Button>
      </form>
    </FormProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
