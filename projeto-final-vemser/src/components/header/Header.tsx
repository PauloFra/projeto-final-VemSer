import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

function Header() {
  const teste = useContext(AuthContext)  
  return (
    <div>Header</div>
  )
}

export default Header