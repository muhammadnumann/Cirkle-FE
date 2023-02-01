import React from 'react';
import EasyEdit from 'react-easy-edit';
import { InputFeildProps } from './inputProps';

function TextAreaField({ isSelected, label, info, placeholder }: InputFeildProps) {
  return (
    <>
      <label className="informationlabel">{label}</label>
      <EasyEdit
        type="textarea"
        editMode={isSelected}
        placeholder={placeholder}
        hideCancelButton
        hideSaveButton
        value={info}
        cancelOnBlur
        onSave={() => {
          console.log('saved!');
        }}
        saveOnBlur
        cssClassPrefix="w-100 "
      />
    </>
  );
}

export default TextAreaField;
