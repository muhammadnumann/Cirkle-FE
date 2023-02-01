import React from 'react';
import 'react-phone-input-2/lib/style.css';
import RadioInput from './radio';
import SelectInputFeild from './select';
import { InputFeildProps } from './inputProps';
import TextInputField from './textinput';
import PhoneNumber from './phoneNumber';
import DateInput from './dateInput';
import TextAreaField from './textAreaField';

const FormInputs = ({
  isSelected,
  label,
  type,
  info,
  options,
  bgClasstomodal,
  radioOption,
  icon,
  iconColor,
  labelIconCheck,
  bgClass,
  more,
  addPhone,
}: InputFeildProps) => {
  return (
    <>
      {type === 'select' ? (
        <SelectInputFeild
          label={label}
          info={info}
          options={options}
          isSelected={isSelected}
          labelIconCheck={labelIconCheck}
        />
      ) : (
        ''
      )}
      {type === 'phonenumber' ? (
        <PhoneNumber
          label={label}
          isSelected={isSelected}
          info={info}
          bgClasstomodal={bgClasstomodal}
          bgClass={bgClass}
          addPhone={addPhone}
        />
      ) : (
        ''
      )}
      {type === 'radio' ? (
        <RadioInput radioOption={radioOption} label={label} isSelected={isSelected} />
      ) : (
        ''
      )}
      {type === 'date' ? <DateInput label={label} isSelected={isSelected} info={info} /> : ''}
      {type === 'text' ? (
        <TextInputField
          label={label}
          info={info}
          isSelected={isSelected}
          icon={icon}
          iconColor={iconColor}
          labelIconCheck={labelIconCheck}
          more={more}
        />
      ) : (
        ''
      )}
      {type === 'email ' || type === 'Email' ? (
        <TextInputField
          label={label}
          info={info}
          isSelected={isSelected}
          icon={icon}
          iconColor={iconColor}
          labelIconCheck={labelIconCheck}
        />
      ) : (
        ''
      )}
      {type === 'textarea' ? (
        <TextAreaField
          label={label}
          info={info}
          isSelected={isSelected}
          icon={icon}
          iconColor={iconColor}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default FormInputs;
