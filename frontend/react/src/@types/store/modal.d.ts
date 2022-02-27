declare type ModalState = {
  display: boolean;
  Current: JSXElementConstructor<any>;
};

declare type ModalAction = {
  type: 'modal/SHOW' | 'modal/HIDE' | 'modal/CURRENT';
  Current?: JSXElementConstructor<any>;
};
