import React from "react";

import RepoList from "../../components/UI/molecules/RepoList";

import withLayout from "../../components/UI/HOC/withLayout";

const Home = () => {
  return (
    <div>
      <RepoList />
    </div>
  );
};

export default withLayout(Home);
