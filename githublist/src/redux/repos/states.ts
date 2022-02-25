interface Repo {
  node: {
    id: number;
    description: string;
    updatedAt: string;
    languages: {};
    forkCount: number;
    name: string;
    openGraphImageUrl: string;
    url: string;
    stargazerCount: number;
  };
}

interface RepoState {
  reposList: Repo[];
  isLoading: boolean;
  loadingError: string;
}

const initialState: RepoState = {
  reposList: [],
  isLoading: false,
  loadingError: "",
};

export default initialState;
