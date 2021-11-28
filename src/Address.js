import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { MenuItem, TextField } from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';

import frLocale from 'date-fns/locale/fr';

const Address = () => {
  console.log(`Address.render()`);
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div>
        <label>Address</label>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              size="small"
              error={!!errors.address}
              helperText={errors.address ? errors.address.message : ' '}
            />
          )}
        />
      </div>
      <div>
        <label>Currency</label>
        <Controller
          name="currency"
          control={control}
          render={({ field }) => (
            <TextField
              select
              {...field}
              fullWidth
              size="small"
              error={!!errors.currency}
              helperText={errors.currency ? errors.currency.message : ' '}
            >
              <MenuItem key={0} value={'GBP'}>
                GBP
              </MenuItem>
              <MenuItem key={1} value={'EUR'}>
                EUR
              </MenuItem>
            </TextField>
          )}
        />
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
        <label>Date</label>
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              renderInput={(params) => <TextField {...params} size="small" />}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};
export default Address;
