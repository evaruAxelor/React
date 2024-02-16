import propTypes from 'prop-types'
import { ErrorMessage } from "./ErrorMessage";

export const Input = ({
  label,
  type = "text",
  name,
  id,
  onChange,
  errors = {},
}) => {
  return (
    <>
      <label htmlFor={name}>{label}: </label>
      <input
        autoComplete="off"
        className="input"
        type={type}
        name={name}
        id={id}
        onChange={onChange}
      />

      {errors[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
    </>
  );
};

Input.propTypes = {
  label : propTypes.string,
  type : propTypes.string,
  name : propTypes.string,
  id : propTypes.string,
  onChange : propTypes.func,
  errors : propTypes.any
}
