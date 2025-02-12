import PropTypes from 'prop-types';

const AuthLayout = ({children}) => {
  return (
    <div className="flex justify-center items-center">
        <div className="flex justify-center w-screen h-screen md:w-1/2 px-12 pt-8 pb-12">
            {children}
        </div>
    </div>
  )
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  

export default AuthLayout