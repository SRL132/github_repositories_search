import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAllRepos } from "../../redux/repos/actions";

import RepoList from "../../components/UI/molecules/RepoList";
import withLayout from "../../components/UI/HOC/withLayout";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRepos());
  }, [dispatch]);
  return (
    <div>
      <RepoList />
    </div>
  );
};

export default withLayout(Home);
