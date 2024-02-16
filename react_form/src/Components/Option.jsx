import propTypes from 'prop-types'

const Option = ({ children }) => {
  return <option value={children}>{children}</option>;
};
export default Option;

Option.propTypes = {
  children : propTypes.any
}