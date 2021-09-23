import { Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/global.css'

export const Layout = ({ children }) => {
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
      </Helmet>

      <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
        <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
          <span className="fs-4">Gatsby + Craft Blog</span>
        </Link>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
