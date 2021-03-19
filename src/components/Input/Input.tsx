import React, { useState } from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../../libs/styles';
export interface IInputProps {
  value?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  onFocus?(event: React.ChangeEvent<HTMLInputElement>): any;
  onBlur?(event: React.ChangeEvent<HTMLInputElement>): any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showError?: boolean;
  errorMessage?: string;
  extra?: React.ReactNode;
  [key: string]: any;
}
const InternalInput: React.ForwardRefRenderFunction<unknown, IInputProps> = (
  props,
  ref: any
) => {
  const {
    value,
    onFocus: propsOnFocus,
    onBlur: propsOnBlur,
    onChange: propsOnChange,
    prefix,
    type,
    className,
    rule,
    errorMessage,
    showError,
    extra,
    ...restProps
  } = props;
  const [focusing, setFocusing] = useState(false);
  const inputRef = (ref as any) || React.createRef<HTMLElement>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof propsOnChange === 'function') {
      propsOnChange(e);
    }
  };
  const onFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof propsOnFocus === 'function') {
      propsOnFocus(e);
    }
    setFocusing(true);
  };
  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (propsOnBlur) {
      propsOnBlur(e);
    }
    setFocusing(false);
  };
  const prefixCls = getPrefixCls('input');
  const inputBoxCls = `${prefixCls}-box`;
  const errorMessageCls = `${prefixCls}-error-message`;
  return (
    <div
      className={classNames(prefixCls, classNames, {
        [`${prefixCls}-focus`]: focusing,
        [`${prefixCls}-error`]: showError
      })}
    >
      <div className={classNames(inputBoxCls)}>
        <input
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          value={props.value}
          type={props.type}
          ref={inputRef}
          {...restProps}
        />
        {extra}
      </div>
      {showError ? (
        <div className={classNames(errorMessageCls)}>{errorMessage}</div>
      ) : null}
    </div>
  );
};
const Input = React.forwardRef<unknown, IInputProps>(InternalInput);
Input.defaultProps = {
  type: 'text'
};
export default Input;
