import React from "react";

import Header from "../organisms/Header/";

function getDisplayName(WrappedComponent: React.ComponentType<any>) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function withLayout(WrappedComponent: React.ComponentType<any>) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <>
        <Header />
        <WrappedComponent {...props} />
      </>
    );
  }

  return WrapperComponent;
}

export default withLayout;
