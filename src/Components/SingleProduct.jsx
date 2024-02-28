import React  from 'react'

function SingleProduct({value}) {
  const {title,image,description,price} = value

  return (
    <div  style={{"width": "58rem",cursor:'pointer',marginLeft:'20rem',marginTop:'2rem',display:'flex'}}>
      <div>
    <img src={image} className="card-img-top" alt={title} height={'350px'} width={'600px'}/>
      </div>
    <div className="card-body" style={{marginTop:'4rem'}}>
      <h5 className="card-title">{title}</h5>
      <span ><b>${price}</b></span>
      <p className="card-text">{description?.substring(0,150)}...</p>
      <button className="btn btn-primary" >Buy Now</button>
    </div>
  </div>
  )
}

export default SingleProduct