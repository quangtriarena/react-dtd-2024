import type { RegisterOptions } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const rules: Rules = {
  email: {
    required: {
      value: true,
      message: 'Email is required'
    },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Invalid email address'
    },
    maxLength: {
      value: 160,
      message: 'Email cannot be longer than 160 characters'
    },
    minLength: {
      value: 5,
      message: 'Email cannot be shorter than 5 characters'
    }
  },

  password: {
    required: {
      value: true,
      message: 'Password is required'
    },
    maxLength: {
      value: 160,
      message: 'Password cannot be longer than 160 characters'
    },
    minLength: {
      value: 5,
      message: 'Password cannot be shorter than 5 characters'
    }
  },

  confirm_password: {
    required: {
      value: true,
      message: 'Password confirmation is required'
    },
    maxLength: {
      value: 160,
      message: 'Password cannot be longer than 160 characters'
    },
    minLength: {
      value: 5,
      message: 'Password cannot be shorter than 5 characters'
    }
  }
}
