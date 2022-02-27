import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAllRepos } from "../../redux/repos/actions";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

import SearchResults from "../../components/UI/molecules/SearchResults";
import RepoList from "../../components/UI/molecules/RepoList";
import Filters from "../../components/UI/molecules/Filters";
import withLayout from "../../components/UI/HOC/withLayout";

const Home = () => {
  const dispatch = useDispatch();
  const filters = useAppSelector((state: RootState) => {
    return state.filters;
  });
  const search = filters.search;
  console.log(search);
  useEffect(() => {
    dispatch(fetchAllRepos(search));
  }, [dispatch, search]);
  return (
    <section className="flex flex-col items-center gap-y-2">
      <Filters />
      {search.length > 0 && <SearchResults />}
      <RepoList />
    </section>
  );
};

export default withLayout(Home);
