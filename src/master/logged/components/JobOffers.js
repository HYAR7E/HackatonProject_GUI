import React from 'react'


// Job Offers List
const JobOfferList = props => {
  return (
    <div>
      <h1>JobOfferList</h1>
      <JobOfferDetail />
    </div>
  )
}
// Job Offers Detail
const JobOfferDetail = props => {
  return (
    <div className="card mb-g border shadow-0">
      <div className="card-header bg-white p-0">
        <div className="p-3 d-flex flex-row">
          <div className="d-block flex-shrink-0">
            <img src="https://smartadmin.lodev09.com/assets/img/demo/avatars/avatar-admin.png" className="img-fluid img-thumbnail" alt="user-profile-pic" />
          </div>
          <div className="d-block ml-2">
            <span className="h6 font-weight-bold text-uppercase d-block m-0"><a href="#topic">Account information &amp; Security</a> / <span className="fw-300">Package location</span></span>
            <a href="#link_a_perfil" className="fs-sm text-info h6 fw-500 mb-0 d-block">Dr. Codex Lantern</a>
            <div className="d-flex mt-1 text-warning align-items-center">
              140 puntos de ayuda
            </div>
          </div>

          <span href="#reportar" data-toggle="dropdown" style={style.style_ellipsis}
            className="btn ml-auto">
              <i className="ni ni-info"></i>
          </span>
        </div>
      </div>
      <div className="card-body ">
        <p>
          Content
        </p>
      </div>
      <div className="card-footer">
        <div className="d-flex align-items-center">
          <span className="text-sm text-muted font-italic"><i className="fal fa-clock mr-1"></i>&nbsp;Publicado hace 1 día</span>
          <button className="btn btn-outline-secondary ml-auto">Postular</button>
        </div>
      </div>
    </div>
  )
}

// Styles
let style = {
  style_ellipsis: {fontSize: "15px"},
  style_0: {},
}


export {JobOfferList, JobOfferDetail};
