import React from 'react'

function PageNotFound() {
  return (
    <div className='container' style={{width:'100%',textAlign:'center',marginTop:'150px'}}>
      <img src='https://media1.tenor.com/images/4da3bb12ff8b214818481019ace3fb97/tenor.gif?itemid=10055847'/>
        <h1 style={{fontWeight:'900', color:'black',textAlign:'center'}}>404</h1>
          <h2>Page Not Found</h2>
          <a href='/' className='btn btn-primary mt-2' >Back to Home</a>
    </div>
  )
}

export default PageNotFound