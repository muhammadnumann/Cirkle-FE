import React from 'react';
import EasyEdit from 'react-easy-edit';
import InfoIconDropBtn from './informationIcondropbtn';
import { InputFeildProps } from './inputProps';

const generateOptions = (value) => {
  let data: object[] = [];

  value.map((v) => {
    data = [...data, { label: v, value: v }];
  });
  return data;
};

const SelectInputFeild = ({
  isSelected,
  label,
  info,
  options,
  placeholder,
  labelIconCheck,
}: InputFeildProps) => {
  return (
    <>
      <label className={`informationlabel  `}>
        {label}
        {labelIconCheck ? <InfoIconDropBtn /> : ''}
      </label>
      <EasyEdit
        type="select"
        options={generateOptions(options)}
        editMode={isSelected}
        placeholder={placeholder}
        hideCancelButton
        hideSaveButton
        cssClassPrefix="w-100 selectdropicon "
        value={info}
        cancelOnBlur
        onSave={() => {
          console.log('saved!');
        }}
        saveOnBlur
      />
    </>
  );
};

export default SelectInputFeild;
