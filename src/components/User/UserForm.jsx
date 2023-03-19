import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import styles from '../../styles/User.module.css'
import { toggleForm, toggleFormType } from '../../features/user/userSlice'

import UserLoginForm from './UserLoginForm'
import UserSignUpForm from './UserSignUpForm'

const UserForm = () => {
  const dispatch = useDispatch()
  const { showForm, formType } = useSelector(({ user }) => user)

  const closeForm = () => dispatch(toggleForm(false))
  const toggleCurrentFormType = (type) => dispatch(toggleFormType(false))

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      {formType === 'signup' ? (
        <UserSignUpForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} />
      ) : (
        <UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm}/>
      )}
    </>
  ) : (
    <></>
  )
}

export default UserForm
