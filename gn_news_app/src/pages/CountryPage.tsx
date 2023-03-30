import React, { useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AppState, AppAction } from "../reducers";
import Articles from "../components/Articles";
import { getCountryCode } from "../data/routesData";

const CountryPage: React.FC = () => {
  const dispatch: Dispatch<AppAction> = useDispatch();
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
    dispatch({ type: "ADD_ARTICLES", payload: articles });
  }, [dispatch, countryCode]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return <Articles articles={articles} />;
};

export default CountryPage;
