import propTypes from 'prop-types'

function Button({ type, children }) {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  type : propTypes.string,
  children : propTypes.any
}