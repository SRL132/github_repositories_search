import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAllRepos } from "../../redux/repos/actions";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

import RepoList from "../../components/UI/molecules/RepoList";
import withLayout from "../../components/UI/HOC/withLayout";

const Home = () => {
  const dispatch = useDispatch();
  const filters = useAppSelector((state: RootState) => {
    return state.filters;
  });
  const search = filters.search;
  useEffect(() => {
    dispatch(fetchAllRepos(search));
  }, [dispatch, search]);
  return (
    <div>
      <RepoList />
    </div>
  );
};

export default withLayout(Home);
