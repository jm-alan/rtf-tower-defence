declare type WASMState = {
  loaded: boolean;
};

declare type WASMAction = {
  type: 'WASM/LOAD' | 'WASM/UNLOAD';
};
