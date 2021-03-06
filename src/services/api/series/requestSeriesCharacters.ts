import api, { getAuthURL } from "..";
import CharacterDataWrapper, { Character } from "../../../models/characters";

export default async function requestSeriesCharacters(
  seriesID: number,
  limit: number = 10
): Promise<Character[] | undefined> {
  const result: CharacterDataWrapper = (
    await api.get(getAuthURL(`/series/${seriesID}/characters`), {
      params: { limit, orderBy: "-modified" },
    })
  ).data;

  return result.data?.results;
}
