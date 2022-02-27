import React, { useEffect } from 'react';
import { WASI } from 'wasi';
import { WasmFs } from '@wasmer/wasmfs';

export default function WASM (): null {
  useEffect(() => {
    const wasmFs = new WasmFs();

    let wasi = new WASI({
      args: [],
      env: {},
      bindings: {
        ...WASI.defaultBindings,
        fs: wasmFs.fs,
      },
    });

    const loadWasm = async () => {
      const response = await fetch(wasmFilePath);
      const wasmBinary = await response.arrayBuffer();

      // Create the WASM instance
      const { instance }: any = await WebAssembly.instantiate(wasmBinary, {
        wasi_snapshot_preview1: wasi.wasiImport,
      });
      // Get the exported function
      const addFn = instance.exports.add;
      setResult(addFn(first, second));
    };
  }, []);

  return null;
}
