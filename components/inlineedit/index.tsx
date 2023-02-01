import { FC, HTMLInputTypeAttribute, useEffect, useState } from 'react';
import { BaseSchema, ValidationError } from 'yup';
import styles from './InlineEdit.module.css';

const isNumberType = (inputType?: HTMLInputTypeAttribute): boolean => {
  const numberTypes = new Set<HTMLInputTypeAttribute>(['number']);

  if (!inputType) {
    return false;
  }

  return numberTypes.has(inputType);
};

const getTargetValue = (event, inputType?: HTMLInputTypeAttribute): string | number => {
  let val: string | number;

  if (isNumberType(inputType)) {
    val = event.target.valueAsNumber;
  } else {
    val = event.target.value;
  }

  return val;
};

const targetIsEmpty = (event, inputType?: HTMLInputTypeAttribute): boolean => {
  if (isNumberType(inputType)) {
    return Number.isNaN(event.target.valueAsNumber);
  }

  return event.target.value.trim() === '';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props<T = any> = {
  value: T;
  setValue: (value: T) => void;
  inputType?: HTMLInputTypeAttribute;
  validationSchema?: BaseSchema;
};
const InlineEdit: FC<Props> = ({
  value,
  setValue,
  inputType = 'text',
  validationSchema,
}: Props) => {
  const [editingValue, setEditingValue] = useState(value);
  const [validationError, setValidationError] = useState<ValidationError | null>(null);

  useEffect(() => {
    if (value !== editingValue) {
      setEditingValue(value);
    }
  }, [value, setEditingValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const onChange = (event) => setEditingValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      event.target.blur();
    }
  };

  const onBlur = (event) => {
    if (validationSchema) {
      setValidationError(null);
      if (!validationSchema.spec.nullable || !targetIsEmpty(event, inputType)) {
        try {
          validationSchema.validateSync(event.target.value);
        } catch (e) {
          if (e instanceof ValidationError) {
            setValidationError(e);
          }
          return;
        }
      }
    }

    if (targetIsEmpty(event, inputType)) {
      if (value != null) {
        setValue(null);
      }
      return;
    }

    const targetValue = getTargetValue(event, inputType);
    if (targetValue !== value) {
      setValue(targetValue);
    }
  };

  return (
    <div className={`${styles.inputItem} ${validationError ? styles.invalid : ''}`}>
      {validationError ? (
        <div className={styles.feedback} aria-live="polite">
          {validationError.message}
        </div>
      ) : null}
      <input
        type={inputType}
        aria-label="Field name"
        value={editingValue || ''}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        className={`${styles.inlineEdit}`}
      />
    </div>
  );
};

export default InlineEdit;
