import React from "react";

import Header from "../organisms/Header/";

function getDisplayName(WrappedComponent: React.ComponentType<any>) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function withLayout(WrappedComponent: React.ComponentType<any>) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <main>
        <Header />
        <WrappedComponent {...props} />
      </main>
    );
  }

  return WrapperComponent;
}

export default withLayout;
