import React from 'react'

function index() {
  return (
    <div className='homePage'>
        <header>Header</header>
        <div className='main row'>
            <div className='left col-md-3'>
                <div className='menu'>
                    Menü
                </div>
                <div className='comments'>
                    comments
                </div>
            </div>
            <div className='middle col-md-6'>
                albums
            </div>
            <div className='right col-md-3'>
                trending
            </div>
        </div>
        <footer>Footer</footer>
    </div>
  )
}

export default index