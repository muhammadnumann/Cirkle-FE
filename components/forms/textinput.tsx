import React from 'react';
import EasyEdit from 'react-easy-edit';
import { InputFeildProps } from './inputProps';
import InfoIcon from 'components/icons/info';
import MoreItemDropBtn from './moreItemsdropdown';

function TextInputField({
  isSelected,
  label,
  info,
  placeholder,
  icon,
  iconColor,
  labelIconCheck,
  more,
}: InputFeildProps) {
  return (
    <>
      <label className={`informationlabel `}>
        {label}
        {labelIconCheck ? <InfoIcon /> : ''}
      </label>

      {icon ? (
        <EasyEdit
          type="text"
          editMode={isSelected}
          hideCancelButton
          hideSaveButton
          cancelOnBlur
          saveOnBlur
          name="custom-one"
          onSave={() => {
            console.log('saved!');
          }}
          cssClassPrefix="w-100 "
          value={
            <>
              <i className={`${icon} pe-2`} style={{ color: iconColor }}></i>
              {info}
            </>
          }
          editComponent={
            <>
              <div className="position-relative">
                <i
                  className={`${icon} pe-2 position-absolute`}
                  style={{ color: iconColor, top: '12px', left: '10px' }}
                ></i>
                <input type="text" className="inputInformation ps-5" />
              </div>
            </>
          }
        />
      ) : (
        <div className="d-flex justify-content-start">
          <EasyEdit
            type="text"
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
            cssClassPrefix=" "
          />
          {more ? <MoreItemDropBtn /> : ''}
        </div>
      )}
    </>
  );
}

export default TextInputField;
