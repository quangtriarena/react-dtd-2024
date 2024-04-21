import { Link } from 'react-router-dom'
import ShopeeLogo from '../../assets/shopeeLogo'

export default function RegisterHeader() {
  return (
    <header className='py-5'>
      <div className='max-w-7xl mx-auto px-4 max-w'>
        <nav className='flex item-end'>
          <Link to='/'>
            <ShopeeLogo />
          </Link>
          <div className='ml-5 text-xl lg:text-2xl'>Register</div>
        </nav>
      </div>
    </header>
  )
}
