export declare global {
  interface Window {
    csrfetch: FetchObject;
  }
}

declare type AnyPrimitive = number | string | boolean | bigint | symbol | undefined | null;
declare type AnyInterpolable = number | string | boolean | bigint | undefined | null;
declare type AnySerializable = number | string | boolean | undefined | null;
