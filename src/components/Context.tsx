import { createContext } from "react";

interface IContext {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  apiError: boolean;
  isLoading: boolean;
}

const context = createContext<IContext | undefined>(undefined);

export default context;
