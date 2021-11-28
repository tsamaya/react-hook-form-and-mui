import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { InputLabel, TextField } from '@mui/material';

// const NestedInput = memo(
//   ({ control, formState: { errors, isDirty } }) => (
//     <div>
//       <label>Name</label>
//       <Controller
//         name="name"
//         control={control}
//         render={({ field }) => (
//           <TextField
//             {...field}
//             fullWidth
//             size="small"
//             error={!!errors.name}
//             helperText={errors.name ? errors.name.message : ' '}
//           />
//         )}
//       />
//       {/* {isDirty && <p>This field is dirty</p>} */}
//     </div>
//   ),
//   (prevProps, nextProps) =>
//     prevProps.formState.isDirty === nextProps.formState.isDirty
// );

// const Company = () => {
//   const methods = useFormContext();

//   return <NestedInput {...methods} />;
// };

const Company = () => {
  console.log(`Company.render()`);
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <InputLabel htmlFor="name" error={!!errors.name}>
        Name
      </InputLabel>

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            size="small"
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ' '}
          />
        )}
      />
    </div>
  );
};
export default Company;
