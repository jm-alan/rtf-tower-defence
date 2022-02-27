declare type ErrorsState = {
  current: string[];
  display: boolean;
};

declare type ErrorsAction = {
  type: 'errors/ADD' | 'errors/SHOW' | 'errors/HIDE';
  error?: string;
};
