    import React, { FC} from 'react';
    import ArticlesList from '../ArticlesList';
    import ArticlesBlocks from '../ArticlesBlocks';
    import { AppState } from '../../reducers';
    import { useSelector } from 'react-redux';
    
   
    
    interface Article {
        source: {
            id: string | null;
            name: string;
        };
        author: string | null;
        title: string;
        description: string | null;
        url: string;
        urlToImage: string | null;
        publishedAt: string;
        content: string | null;
    };
    
    interface ArticlesProps {
        articles: Article[];
    };
    
    const Articles: FC<ArticlesProps> = ({ articles }) => {
        const toggleList = useSelector((state: AppState) => state.toggleList);
        
        
        return (
            <>
                {toggleList ? <ArticlesList articles={articles}/> : <ArticlesBlocks articles={articles}/>}         
            </>
        );
    };
    
    export default Articles;

