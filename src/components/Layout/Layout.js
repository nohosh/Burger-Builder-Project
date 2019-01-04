import React from 'react';

const layout = ( props ) => (
    <>
        <div> Tooolbar, Sidedrawer,Backdrop</div>
        <main>
            {props.children}
        </main>
    </>
);

export default layout;