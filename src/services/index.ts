import axios from "axios/axios";

import { generateParamsForMarvelApis } from "./utilities";

const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

export const getSampleData = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const response = await axios.get(url);

  return response;
};

export const getCharacters = async (
  limit: number,
  page: number,
  nameStartsWith?: string
) => {
  const { timestamp, hash } = generateParamsForMarvelApis();

  const offset = limit * page;

  let url = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=db6833cf23ce64add22b5b3a2a2cebfb&hash=900433aef02b971ed232cb5ac4cbaf10`;

  if (nameStartsWith) {
    url += `&nameStartsWith=${nameStartsWith}`;
  }

  const response = await axios.get(url);

  return response;
};

export const getComics = async (limit: number, page: number) => {
  const { timestamp, hash } = generateParamsForMarvelApis();

  const offset = limit * page;

  const url = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=db6833cf23ce64add22b5b3a2a2cebfb&hash=900433aef02b971ed232cb5ac4cbaf10`;

  const response = await axios.get(url);

  return response;
};
