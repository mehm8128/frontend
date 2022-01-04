import styles from './Header.module.css'
import {useNavigate} from 'react-router-dom'
import logo from '../assets/logo.svg'
import FromNewPalace from './DialogFromNewPalace'
import useAuth from './UserProvider'

const Header: React.VFC = () => {
  const {user} = useAuth()
  const navigate = useNavigate()
  return (
    <>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo" onClick={() => navigate('/')} />
        {user.auth ? <FromNewPalace /> : null}
      </div>
    </>
  )
}

export default Header
