import React, { useEffect } from "react";

// REDUX
import { fetchAllRepos } from "../../redux/repos/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

// COMPONENTS
import SearchResults from "../../components/UI/molecules/SearchResults";
import RepoList from "../../components/UI/molecules/RepoList";
import Filters from "../../components/UI/molecules/Filters";
import withLayout from "../../components/UI/HOC/withLayout";

const Home = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state: RootState) => {
    return state.filters;
  });
  const repos = useAppSelector((state: RootState) => {
    return state.repos;
  });
  const error = repos.loadingError;
  const search = filters.search;

  useEffect(() => {
    dispatch(fetchAllRepos(search));
  }, [dispatch, search]);

  if (error) {
    return (
      <div className="flex flex-col items-center gap-y-2">
        There has been an error. Please make sure you have set up and added your
        github credentials to the project as mentioned in
        <a
          href="https://github.com/SRL132/github_repositories_search "
          target="_blank"
        >
          https://github.com/SRL132/github_repositories_search.
        </a>
      </div>
    );
  }
  return (
    <section className="flex flex-col items-center gap-y-2">
      <Filters />
      {search.length > 0 && <SearchResults />}
      <RepoList />
    </section>
  );
};

export default withLayout(Home);
