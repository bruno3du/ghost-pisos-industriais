interface SearchParams {
  [key: string]: string;
}

interface Params {
  [key: string]: string;
}

export type PageProps<IParams = Params, ISearchParams = SearchParams> = {
  params: Promise<IParams>;
  searchParams: Promise<ISearchParams>;
};
