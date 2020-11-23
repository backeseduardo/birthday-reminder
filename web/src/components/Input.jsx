import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import cls from 'class-names';
import PropTypes from 'prop-types';

function Input(props) {
  const { label, defaultValue, value, onChange, error } = props;

  return (
    <div className="flex flex-col my-2">
      {label && <span className="mb-1">{label}</span>}

      <div className="relative flex flex-row items-center">
        <input
          className={cls([
            'border-2 rounded p-2 w-full',
            'focus:outline-none focus:border-gray-700',
            {
              'border-red-400 text-red-700 pr-7 focus:border-red-700': !!error,
            },
          ])}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
        />

        {error && (
          <Icon
            icon={faExclamationCircle}
            className="text-red-400 absolute right-2 z-10"
          />
        )}
      </div>

      {error && <span className="mt-1 text-red-700">{error}</span>}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func,
  error: PropTypes.string,
};

Input.defaultProps = {
  label: undefined,
  defaultValue: undefined,
  value: undefined,
  onChange: () => {},
  error: undefined,
};

export default Input;
