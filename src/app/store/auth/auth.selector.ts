import type { RootState } from "@/app/store";

const selectAccessToken = (state: RootState) => state.auth.accessToken;

export { selectAccessToken };