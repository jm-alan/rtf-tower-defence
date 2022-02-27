const LOAD = 'WASM/LOAD';
const UNLOAD = 'WASM/UNLOAD';

export const LoadWASM = (): WASMAction => ({
  type: LOAD
});

export const UnloadWASM = (): WASMAction => ({
  type: UNLOAD
});

export default function reducer (
  state: WASMState = { loaded: false },
  { type }: WASMAction
): WASMState {
  switch (type) {
    case LOAD:
      return {
        loaded: true
      };
    case UNLOAD:
      return {
        loaded: false
      };
    default:
      return state;
  }
}
