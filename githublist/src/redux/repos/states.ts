interface Repo {
  node: {
    id: number;
    description: string;
    updatedAt: string;
    name: string;
    url: string;
    primaryLanguage: {
      color: string;
      name: string;
    };
  };
}

interface RepoState {
  reposList: Repo[];
  allRepos: Repo[];
  isLoading: boolean;
  loadingError: string;
}

const initialState: RepoState = {
  reposList: [],
  isLoading: false,
  loadingError: "",
  allRepos: [],
};

export default initialState;
