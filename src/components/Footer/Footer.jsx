import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-4 fixed-bottom">
      <div className="container">
        <div>
          <div className="mx-auto">
          <h5 className="text-uppercase mb-4 font-weight-bold text-warning">E-commerce</h5>
            <p className='flex-container'>
              <a className="text-light" style={{ textDecoration: 'none' }}> mpiernash@gmail.com</a>
              <a id='linkedin' href="https://www.linkedin.com/in/manel-piernas-hernandez/" className="text-light"> https://www.linkedin.com/in/manel-piernas-hernandez/</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer