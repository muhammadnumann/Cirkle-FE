import React from 'react';
import EasyEdit from 'react-easy-edit';
import { InputFeildProps } from './inputProps';

function RadioInput({ isSelected, label, radioOption = ['Yes', 'NO'] }: InputFeildProps) {
  console.log(radioOption);
  return (
    <>
      <label className="informationlabel">{label}</label>
      <EasyEdit
        type="text"
        value="one"
        options={[]}
        editMode={isSelected}
        hideCancelButton
        hideSaveButton
        cancelOnBlur
        saveOnBlur
        onSave={() => {
          console.log('saved!');
        }}
        editComponent={
          <div className="d-flex">
            <label className="radio-input text-black">
              {radioOption[0]}
              <input type="radio" checked={true} name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="radio-input text-black">
              {radioOption[1]}
              <input type="radio" checked={true} name="radio" />
              <span className="checkmark"></span>
            </label>
          </div>
        }
      />
    </>
  );
}

export default RadioInput;
