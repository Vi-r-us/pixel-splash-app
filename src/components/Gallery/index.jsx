/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./index.css";
import { useGlobalContext } from "../../context";
import { getMaxColumns, getSubarray } from "../../utils";
import loadingAnim from "../../assets/anim/Searching.json";
import errorAnim from "../../assets/anim/Error404.json";
import noResultAnim from "../../assets/anim/NoResult.json";
import Lottie from "lottie-react";

const Gallery = () => {
  const { getNextPage, pictures, width, isLoading, isError } =
    useGlobalContext();
  const gridColumns = getMaxColumns(width);

  if (pictures.length === 0 && isLoading) {
    return (
      <section className="gallery-section">
        <Lottie className="anim" animationData={loadingAnim} />
      </section>
    );
  }
  if (pictures.length === 0 && isError) {
    return (
      <section className="gallery-section">
        <Lottie className="anim" animationData={errorAnim} />
      </section>
    );
  }
  if (pictures.length === 0) {
    return (
      <section className="gallery-section">
        <Lottie className="anim" animationData={noResultAnim} />
      </section>
    );
  }

  return (
    <section className="gallery-section">
      <PictureList gridColumns={gridColumns} pictures={pictures} />
      <button className="load-more-btn" onClick={getNextPage}>
        {isLoading ? "Is Loading" : "Load More"}
      </button>
    </section>
  );
};

function PictureList({ gridColumns, pictures }) {
  const imageList = getSubarray(gridColumns, pictures);
  return (
    <div className="picture-list">
      {Array(gridColumns)
        .fill()
        .map(Math.random)
        .map((_, index) => {
          return (
            <ul className="picture-list-col" key={index}>
              {imageList[index] &&
                imageList[index].map((picture) => {
                  const { id, urls, alt_description } = picture;
                  return (
                    <li className="picture-container" key={id}>
                      <img src={urls.regular} alt={alt_description} />
                    </li>
                  );
                })}
            </ul>
          );
        })}
    </div>
  );
}

export default Gallery;
