import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextFieldWrapper = ({value, onChange}) => {

  const mapper = {"firstName": "First Name"}
  return (  
    <TextField
            value={mapper[value]}
            margin="dense"
            id={value}
            label= {mapper[value]}
            fullWidth
            onChange={onChange}/>
  );
}
 
export default TextFieldWrapper;