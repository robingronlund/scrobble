import React from 'react'

function WithTableLoading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <main className="main-wrapper">
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </main>
    );
  };
}
export default WithTableLoading;
