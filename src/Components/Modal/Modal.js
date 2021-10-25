import React from 'react'
import './modal.css'

const Modal = ({ active, setActive }) => {
  return (
    <div className={active ? 'modal_active' : 'modal'}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_name">IT Administrator</div>
        <div className="modal_text">
          {' '}
          Generate and deliver audit and compliance reports faster.
        </div>

        <div className="modal_bigtext">
          Stop spending time on manual scripting and consolidation of audit data
          whenever you need reports about who’s making changes to IT systems or
          who has permissions to what.
        </div>
        <button className="modal_btn">Download Free 20-Day Trial</button>
      </div>
    </div>
  )
}

export default Modal
