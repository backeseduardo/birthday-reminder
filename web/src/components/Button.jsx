import cls from 'class-names';
import PropTypes from 'prop-types';

function getClassName(variant) {
  if (variant === 'primary') {
    return 'bg-red-600 text-white p-2 rounded';
  } else if (variant === 'secondary') {
    return 'bg-red-200 text-red-600 p-2 rounded';
  }

  throw new Error('Button variant invalid');
}

function Button(props) {
  const { children, type, variant, className } = props;

  return (
    <button type={type} className={cls([getClassName(variant), className])}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.element,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
}

Button.defaultProps = {
  children: null,
  type: 'button',
  variant: 'primary',
  className: '',
}

export default Button;