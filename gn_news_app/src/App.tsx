import React, { useEffect } from "react";
import Header from "./components/Header";
import Articles from "./components/Articles";
import { useDispatch, useSelector } from "react-redux";
import { AppState, AppAction } from "./reducers";
import { Dispatch } from "redux";
import axios from "axios";

const App: React.FC = () => {
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

  return (
    <div className="App">
      <Header title="GN News" />
      <Articles articles={articles} />
    </div>
  );
};

export default App;
