import { useQuery } from "react-query";
import RepositoryFactory from "../repositories/RepositoryFactory";

export default function usePage(name: string, translateTo: string) {
  return useQuery(name, () =>
    RepositoryFactory.getCountryRepo().retrieve({ name, translateTo })
  );
}
