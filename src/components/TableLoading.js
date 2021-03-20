import React from 'react'

function WithTableLoading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <main className="main-wrapper">
        <p style={{ textAlign: 'center', fontSize: '30px' }}>
          Hold on, fetching data may take some time :)
        </p>
      </main>
    );
  };
}
export default WithTableLoading;
