import propTypes from 'prop-types'

export function ErrorMessage({ children }) {

  return <p className="error">{children}</p>;

}

ErrorMessage.propTypes = {
  children : propTypes.any
}
