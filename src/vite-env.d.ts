interface ImportMetaEnv {
  readonly VITE_AUTH_STRATEGY: 'JWT' | 'COOKIES';
  readonly VITE_BACKEND_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
