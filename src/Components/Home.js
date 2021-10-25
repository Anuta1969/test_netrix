import React, { useState } from 'react'
import Modal from './Modal/Modal'
function Home(active, setActive) {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="container">
      <div className="wrapper">
        <h2 className="name_main">
          Address the IT auditing challenges of your department and your
          business with Netwrix Auditor.{' '}
        </h2>

        <div className="wrapper-department">
          <div id="one" className="department ">
            <span className="department_name">IT Administrator</span>

            <p className="department_text">
              Generate and deliver audit and compliance reports faster.
            </p>

            {/* <img src="./arrow-right.png" /> */}

            <a onClick={() => setModalActive(true)}>
              <img src="./arrow-right.png" />
            </a>

            <Modal active={modalActive} setActive={setModalActive} />
          </div>
          <div className="department">
            <span className="department_name">IT Security Administrator</span>
            <p className="department_text">
              Investigate suspicious user activity before the data breach
              occurs.
            </p>
            <img src="./arrow-right.png" />
          </div>
          <div className="department">
            <span className="department_name">IT Manager</span>
            <p className="department_text">
              Take back control over your IT infrastructure and eliminate stress
              of your next compliance audit.
            </p>
            <img src="./arrow-right.png" />
          </div>
          <div className="department">
            <span className="department_name">T Director, CIO/CISO</span>
            <p className="department_text">
              Mitigate security risks and minimize compliance costs.
            </p>
            <img src="./arrow-right.png" />
          </div>
          <div className="department">
            <span className="department_name">IT Director, CIO/CISO</span>
            <p className="department_text">
              Mitigate security risks and minimize compliance costs.
            </p>
            <img src="./arrow-right.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
