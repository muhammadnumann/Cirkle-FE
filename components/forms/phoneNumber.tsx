import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { InputFeildProps } from './inputProps';
import EasyEdit from 'react-easy-edit';
import styles from './form.module.css';

export default function PhoneNumber({
  label,
  isSelected,
  info,
  bgClasstomodal,
  bgClass,
  addPhone,
}: InputFeildProps) {
  return (
    <>
      <label className={'informationlabel'}>{label}</label>

      <EasyEdit
        type="text"
        editMode={isSelected}
        hideCancelButton
        hideSaveButton
        value={info}
        cancelOnBlur
        saveOnBlur
        name="custom-one"
        onSave={() => {
          console.log('saved!');
        }}
        editComponent={
          <PhoneInput
            containerClass={`${styles.phonecontainer} ${bgClasstomodal} ${bgClass} ${
              addPhone ? 'addPhoneIconClass' : ''
            }`}
            inputClass={styles.phoneinput}
            buttonClass={styles.phoneButton}
            dropdownClass={styles.phonedropdown}
            country={'us'}
            value={''}
          />
        }
      />
    </>
  );
}
