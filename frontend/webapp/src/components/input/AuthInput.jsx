import PropTypes from 'prop-types';
import {useState} from 'react';
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6';

const AuthInput = ({
    value,
    onChange,
    label,
    placeholder,
    type
}) => {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    };

  return (
    <div>
        <label className="text-[15px] text-black">{label}</label>

        <div className="input-box">
            <input
            type={type=='password' ? (showPassword ? "text" : 'password') : 'text'}
            placeholder={placeholder}
            className="text-[14px] w-full bg-transparent outline-none"
            value={value}
            onChange={(e) => onChange(e)}
            />
        {type === 'password' && (
            <>
            {showPassword ? (
                <FaRegEye
                size={22}
                className='cursor pointer'
                onClick={() => toggleShowPassword()}
                />
            ) : (
                <FaRegEyeSlash
                size={22}
                className='cursor pointer'
                onClick={() => toggleShowPassword()}
                />
            )}
            </>
        )}
        
        </div>

    </div>
  )
}

AuthInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
};

export default AuthInput