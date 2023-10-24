import React from 'react';

interface PropsFooter{

}

const Footer:React.FC<PropsFooter> = () =>
{
    return (
        <footer className="rounded-bottom-4">
            <div className="nav-item btn btn-danger border border-light rounded-pill mx-1 common-button my-3">
                <p>Send me an <span className="email">email</span></p>
            </div>
        </footer>
    );
};

export {Footer};//default