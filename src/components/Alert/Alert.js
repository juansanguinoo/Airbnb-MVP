import React, { useContext } from 'react'
import swal from '@sweetalert/with-react' 
import authContext from '../../context/auth/authContext'

const Alert = () => {

  const AuthContext = useContext(authContext);
  const { message } = AuthContext;

  const showAlert = () => {
    if(message === 'User created successfully') {
      swal({
        title: 'Success',
        text: message,
        icon: 'success',
        button: 'Ok'
      })
    } else if (
      message === 'User already exists' || 
      message === 'Password incorrect' || 
      message === 'The user does not exist'
      ) {
      swal({
        title: 'Error',
        text: message,
        icon: 'error',
        button: 'Ok'
      })
    }
  }

  return (
    <div>
      {message ? showAlert() : null}
    </div>
  )
}

export default Alert
