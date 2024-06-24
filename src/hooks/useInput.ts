import React, { useState } from 'react'

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};
export default useInput;
// const useInput = (initialValue = '') => {
//   const [value, setValue] = useState(initialValue)
//   return (
//     value,
//     onChange: (event) => setValue(event.target.value)
//   )
// }

// export default useInput
// const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setValue(event.target.value)
// }
// return { value, setValue, handleInput }
