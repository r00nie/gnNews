import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import axios from "axios";
import { AppState, AppAction } from "../reducers";
import Articles from "../components/Articles";

const HomePage: React.FC = () => {
  const dispatch: Dispatch<AppAction> = useDispatch();
  const articles = useSelector((state: AppState) => state.articles);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=pl&apiKey=8c278600340c441b8ac520d96698a3d1"
      );
      const articles = response.data.articles;
      dispatch({ type: "ADD_ARTICLES", payload: articles });
    };
    fetchData();
  }, [dispatch]);

  return <Articles articles={articles} />;
};

export default HomePage;
