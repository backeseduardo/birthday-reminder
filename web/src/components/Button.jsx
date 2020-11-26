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
        'focus:outline-none transition p-2 rounded font-semibold',
        {
          'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white uppercase':
            variant === 'primary',
          'bg-indigo-200 hover:bg-indigo-300 active:bg-indigo-400 text-indigo-700':
            variant === 'secondary',
          'text-indigo-700 active:text-indigo-900': variant === 'link',
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
