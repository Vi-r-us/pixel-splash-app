import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { getUserPreferenceTheme } from "./utils";

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getUserPreferenceTheme());
  const [width, setWidth] = useState(window.innerWidth);
  const [pictures, setPictures] = useState([]);
  const [searchTerm, setSearchTerm] = useState("cat");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchTerm, page],
    queryFn: async () => {
      const resp = await axios.get(`${url}&page=${page}&query=${searchTerm}`);
      return resp.data;
    },
  });

  // For getting the body width dynamically
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  // For setting the picture Array after fetching the data
  useEffect(() => {
    if (data?.results) {
      if (page === 1) setPictures([...data.results]);
      else setPictures((prev) => [...prev, ...data.results]);
    }
  }, [data, page]);

  // Setting the prefered theme by user
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    // Set the theme preference in local storage
    localStorage.setItem("dark-theme", newTheme);

    // as we are using useEffect no use of explicitly toggle the class
    // const body = document.querySelector("body");
    // body.classList.toggle("dark-theme", newTheme);
  };

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        searchTerm,
        width,
        pictures,
        isLoading,
        isError,
        toggleDarkTheme,
        setSearchTerm,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};
