import { useQuery } from "react-query";
import RepositoryFactory from "../repositories/RepositoryFactory";

export default function useRegion() {
  return useQuery("regions", () =>
    RepositoryFactory.getRegionRepo().retrieveAll()
  );
}
