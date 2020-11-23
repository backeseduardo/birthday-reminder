import cls from 'class-names'
import PropTypes from 'prop-types'

function Input(props) {
  const { label, defaultValue, value, onChange, error } = props

  return (
    <div className='flex flex-col'>
      {label && <span className='mb-1'>{label}</span>}

      <input
        className={cls([
          'border-2 rounded p-2',
          {
            'border-red-500 text-red-600': error,
          },
        ])}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
      />
    </div>
  )
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
  error: PropTypes.bool,
}

Input.defaultProps = {
  label: undefined,
  defaultValue: undefined,
  value: undefined,
  onChange: () => {},
  error: false,
}

export default Input
