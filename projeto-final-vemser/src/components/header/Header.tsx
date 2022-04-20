import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

function Header() {
  const teste = useContext(AuthContext)
  console.log(teste);
  
  return (
    <div>Header</div>
  )
}

export default Header