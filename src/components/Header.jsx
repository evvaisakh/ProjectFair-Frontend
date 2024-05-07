import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/TokenAuth'

function Header({ insideDashboard }) {
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)
  const navigate = useNavigate()
  const logout = () => {
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }

  return (
    <>
      <Navbar style={{ zIndex: '1' }} className="card shadow top-0 position-fixed w-100">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className='text-decoration-none fw-bold'><i className="fa-brands fa-docker"></i> <span className='text-warning'>Project</span> Fair</Link>
          </Navbar.Brand>
          {insideDashboard &&
            <div className="ms-auto">
              <button onClick={logout} className="btn btn-link fw-semibold text-decoration-none">Logout<i className="fa-solid fa-right-from-bracket ps-1"></i></button>
            </div>}
        </Container>
      </Navbar>
    </>
  )
}

export default Header