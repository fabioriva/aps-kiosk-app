import { createContext } from "svelte";

interface WSState {
  connected: boolean;
  // messages: string[];
  message: any;
}

export const [getWSContext, setWSContext] = createContext<WSState>();
