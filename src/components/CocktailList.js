import React from "react";
import Cocktail from "../components/Cocktail";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">no cocktail match your search criteria</h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>

      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
