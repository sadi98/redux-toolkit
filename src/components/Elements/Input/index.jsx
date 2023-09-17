import React from 'react'
import Label from './Label'
import Input from './Input'
import { forwardRef } from 'react';

const InputForm = forwardRef((props, ref) => {
    const {label,name,type,placeholder} = props;
    return (
          <div className='mb-6'>
              <Label htmlfor={name}>{label}</Label>
              <Input type={type} name={name} ref={ref} placeholder={placeholder}/>
          </div>
    );
});

export default InputForm