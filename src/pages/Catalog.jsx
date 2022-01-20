import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/page-header/PageHeader";
import { category as cate } from '../api/tmdbApi'
import MovieGrid from "../components/movie-grid/MovieGrid";
const Catalog = () => {
  const  { category } = useParams()
  return (
    <>
    <PageHeader>
      {category === cate.movie ? 'Movie' : 'TV Series'}
    </PageHeader>
    <div className="container">
      <div className="section mb-3">
        <MovieGrid category={category}></MovieGrid>
      </div>
    </div>
    </>
  );
};

export default Catalog;
