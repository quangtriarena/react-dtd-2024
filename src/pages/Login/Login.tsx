export default function Login() {
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 bg-white shadow-sm'>
              <div className='text-2xl'>Đăng Nhập</div>
              <div className='mt-8'></div>
              <input
                type='email'
                name='email'
                className='py-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                placeholder='Email'
              />
              <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>

              <div className='mt-3'></div>
              <input
                type='password'
                name='password'
                className='py-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                placeholder='Password'
              />
              <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>

              <div className='mt-3'>
                <button className='w-full bg-red-500 text-center py-4 px-2 uppercase text-white text-sm hover:bg-red-600'>
                  Đăng Nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
