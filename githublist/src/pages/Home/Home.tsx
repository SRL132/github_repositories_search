import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAllRepos } from "../../redux/repos/actions";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

import RepoList from "../../components/UI/molecules/RepoList";
import Filters from "../../components/UI/molecules/Filters";
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
    <section className="flex flex-col items-center gap-y-2">
      <Filters />
      <RepoList />
    </section>
  );
};

export default withLayout(Home);
