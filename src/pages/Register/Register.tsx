import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { rules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    console.log('data', data)
  })

  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Ký</div>
              <div className='mt-8'></div>
              <input
                type='email'
                className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                placeholder='Email'
                {...register('email', rules.email)}
              />
              <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors['email']?.message}</div>
              <div className='mt-2'></div>
              <input
                type='password'
                className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                placeholder='Password'
                autoComplete='on'
                {...register('password', rules.password)}
              />
              <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors['password']?.message}</div>
              <div className='mt-2'></div>
              <input
                type='password'
                className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                placeholder='Confirm password'
                {...register('confirm_password', rules.confirm_password)}
              />
              <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors['confirm_password']?.message}</div>
              <div className='mt-2'>
                <button
                  type='submit'
                  className='w-full bg-red-500 text-center py-4 px-2 uppercase text-white text-sm hover:bg-red-600'
                >
                  Đăng Ký
                </button>
              </div>
              <div className='flex item-center justify-content mt-8'>
                <span className='text-gray-400'>Bạn mới biết đến Shopee? </span>
                <Link className='text-red-400 ml-1' to='/login'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
