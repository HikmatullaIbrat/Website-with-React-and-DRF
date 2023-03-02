import React from 'react';
import { Link } from 'react-router-dom';
const home = () => (
    <div className="container mt-3">
        <h2>Example of Jumbotron</h2>
        <div className="mt-4 p-5 bg-primary text-white rounded">
            <h1>Jumbotron Example</h1> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat..
            </p>
            <Link className='btn btn-secondary btn-md' to="/blog" role="button">Read more...</Link>
        </div>
    </div>
);

export default home;