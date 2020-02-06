import React from 'react';

const Layout = ({children, data}) => {
        return (
            <React.Fragment>
                <main>
                    <div data={data}>
                        {children}
                    </div>
                </main>
            </React.Fragment>
        );
}

export default Layout;