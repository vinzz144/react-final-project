import React from 'react'
import { Link } from 'react-router-dom'


export default () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>React News App</h1>
                    <hr />
                    <Link to='/login'>
                        <button className='btn btn-lg btn-warning'>
                            Login
                        </button>
                    </Link>
                    <Link to='/news-source'>
                        <button className='btn btn-lg btn-info'>
                            Read News
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}