import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LandingImg from '../assets/landingimg3.webp'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectsAPI } from '../services/allAPI'

function Home() {
  const [homeProjects, setHomeProjects] = useState([])
  const navigate = useNavigate()
  const [loginStatus, setLoginStatus] = useState(false)
  console.log(homeProjects);

  useEffect(() => {
    getHomeProjects()
    if (sessionStorage.getItem("token")) {
      setLoginStatus(true)
    } else {
      setLoginStatus(false)
    }
  }, [])

  const handleProjects = () => {
    if (loginStatus) {
      navigate('/projects')
    } else {
      toast.warning("Please login to get full access to our Projects!!!")
    }
  }

  const getHomeProjects = async () => {
    try {
      const result = await getHomeProjectsAPI()
      console.log(result);
      if (result.status == 200) {
        setHomeProjects(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {/* landing */}
      <div style={{ minHeight: '100vh' }} className='w-100 d-flex justify-content-center align-items-center rounded  shadow'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: '80px' }}><i className="fa-brands fa-docker"></i> <span className='text-warning pe-1'>Project</span>Fair</h1>
              <p style={{ textAlign: 'justify' }}>One Stop Destination for all Software Development Projects.
                Where User can add and manage their projects. As well as access
                all projects available in our website... What are you waiting
                for!!!</p>
              {
                loginStatus ?
                  <Link to={'/dashboard'} className='btn btn-warning fw-bold'>Manage Your Projects
                    <i className="fa-solid fa-chevron-right fa-beat-fade ms-1"></i>
                    <i className="fa-solid fa-chevron-right fa-beat-fade"></i>
                    <i className="fa-solid fa-chevron-right fa-beat-fade"></i>
                  </Link>
                  :
                  <Link to={'/login'} className='btn btn-warning fw-bold'>Start to Explore
                    <i className="fa-solid fa-chevron-right fa-beat-fade ms-1"></i>
                    <i className="fa-solid fa-chevron-right fa-beat-fade"></i>
                    <i className="fa-solid fa-chevron-right fa-beat-fade"></i>
                  </Link>
              }
            </div>
            <div className="col-lg-6">
              <img className='img-fluid' src={LandingImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* projects */}
      <div className="mt-5 text-center">
        <h1 className="mb-4">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            {homeProjects?.length > 0 &&
              homeProjects?.map(project => (
                <div key={project} className="me-5">
                  <ProjectCard displayData={project} />
                </div>
              ))
            }
          </div>
        </marquee>
        <div className='d-flex justify-content-end'>
          <button onClick={handleProjects} className='btn btn-link mt-3 fw-bolder'>Click here to View More Projects...<i className="fa-solid fa-hand-pointer fa-beat-fade ps-1"></i></button>
        </div>
      </div>
      {/* testimony */}
      <div className="d-flex align-items-center mt-3 mb-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                <span>Tony Stark</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid a distinctio optio! A repellat id tenetur quibusdam sit labore repellendus quasi iure assumenda obcaecati! Minus assumenda itaque deserunt veniam rerum?</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdn-icons-png.flaticon.com/128/1154/1154448.png" alt="" />
                <span>Anabella</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid a distinctio optio! A repellat id tenetur quibusdam sit labore repellendus quasi iure assumenda obcaecati! Minus assumenda itaque deserunt veniam rerum?</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdn-icons-png.flaticon.com/128/15243/15243954.png" alt="" />
                <span>Peter Parker</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid a distinctio optio! A repellat id tenetur quibusdam sit labore repellendus quasi iure assumenda obcaecati! Minus assumenda itaque deserunt veniam rerum?</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} transition={Zoom} />
    </>
  )
}

export default Home