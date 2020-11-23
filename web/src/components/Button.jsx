import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import cls from 'class-names';
import PropTypes from 'prop-types';

function Button(props) {
  const { children, type, variant, className, leftIcon, rightIcon } = props;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cls([
        'focus:outline-none',
        {
          'bg-red-600 hover:bg-red-500 active:bg-red-700 text-white p-2 rounded font-semibold uppercase':
            variant === 'primary',
          'bg-red-200 hover:bg-red-100 active:bg-red-300 text-red-600 p-2 rounded font-semibold focus:border-yellow-900':
            variant === 'secondary',
        },
        className,
      ])}
    >
      {leftIcon && <Icon icon={leftIcon} className="mr-2" />}

      {children}

      {rightIcon && <Icon icon={rightIcon} className="ml-2" />}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.elementType,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  leftIcon: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  rightIcon: PropTypes.any,
};

Button.defaultProps = {
  children: null,
  type: 'button',
  variant: 'primary',
  className: '',
  leftIcon: undefined,
  rightIcon: undefined,
};

export default Button;
