/* eslint-disable no-unused-vars */
import "./index.css";
import { useGlobalContext } from "../../context";
import { getMaxColumns, getSubarray } from "../../utils";
import loadingAnim from "../../assets/anim/Searching.json";
import errorAnim from "../../assets/anim/Error404.json";
import noResultAnim from "../../assets/anim/NoResult.json";
import Lottie from "lottie-react";

const Gallery = () => {
  const { page, pictures, width, setPage, isLoading, isError } =
    useGlobalContext();

  const gridColumns = getMaxColumns(width);

  if (isLoading) {
    return (
      <section className="gallery-section">
        <Lottie className="anim" animationData={loadingAnim} />
      </section>
    );
  }
  if (isError) {
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
  // console.log(pictures);

  const imageList = getSubarray(gridColumns, pictures);

  return (
    <section className="gallery-section">
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
      {/* TODO: Add Load More button (work as pagination) */}
      {/* <button className="load-more-btn" onClick={() => setPage(page + 1)}>
        Load More
      </button> */}
    </section>
  );
};

export default Gallery;
