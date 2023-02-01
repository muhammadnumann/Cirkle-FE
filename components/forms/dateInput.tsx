import React from 'react';
import { InputFeildProps } from './inputProps';
import EasyEdit from 'react-easy-edit';
import CustomeDateInput from 'components/date';

function DateInput({ label, isSelected, info, placeholder }: InputFeildProps) {
  return (
    <>
      <label className={'informationlabel'}>{label}</label>
      <br />
      <EasyEdit
        type="text"
        editMode={isSelected}
        hideCancelButton
        hideSaveButton
        value={info}
        cancelOnBlur
        saveOnBlur
        name="custom-Date"
        editComponent={<CustomeDateInput />}
        placeholder={placeholder}
        onSave={() => {
          console.log('saved!');
        }}
      />
    </>
  );
}

export default DateInput;
