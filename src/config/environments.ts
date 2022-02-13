import { loadEnv } from "vite";

export default ({ mode }: any) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));
};
