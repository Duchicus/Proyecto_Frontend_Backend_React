import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-4 fixed-bottom">
      <div className="container">
        <div>
          <div className="mx-auto">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">E-commerce</h5>
            <p>
              <a className="text-light" style={{ textDecoration: 'none' }}> mpiernash@gmail.com</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/manel-piernas-hernandez/" className="text-light" style={{ textDecoration: 'none' }}> https://www.linkedin.com/in/manel-piernas-hernandez/</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer