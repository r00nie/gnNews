import React, { useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AppState } from "../types/globalTypes";
import { Articles } from "../components/Articles";
import { getCountryCode } from "../data/routesData";
import { addArticles } from "../reducers";

const CountryPage: React.FC = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state: AppState) => state.articles);
  const { countryName } = useParams<{ countryName: string }>();

  const countryCode = useMemo(
    () => getCountryCode(countryName || ""),
    [countryName]
  );

  const fetchArticles = useCallback(async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=8c278600340c441b8ac520d96698a3d1`
    );
    const articles = response.data.articles;
    dispatch(addArticles(articles));
  }, [dispatch, countryCode]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return <Articles articles={articles} />;
};

export default CountryPage;
