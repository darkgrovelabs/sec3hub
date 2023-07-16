export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: string
    }
  }
}
