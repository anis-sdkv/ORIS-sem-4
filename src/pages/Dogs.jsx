import "../styles/App.css";
import React, { useEffect, useState } from "react";

import DogCard from "../components/DogCard";
import DogsService from "../API/DogsService";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/Pagination";

function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [dogsError, setDogsError] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const [fetchDogs, isLoading, fetchError] = useFetching(async () => {
    const response = await DogsService.getAll(limit, page);
    const data = await response.json();
    if (response.status == 200) {
      const totalCount = response.headers.get("pagination-count");
      setTotalPages(getPageCount(totalCount, limit));
      setDogs(data);
    } else {
      setDogsError(data.message);
    }
  });

  useEffect(() => {
    fetchDogs();
  }, [page]);

  return (
    <div>
      {dogsError && <p>Error: {dogsError}</p>}
      {isLoading ? (
        <p>Dogs is loading...</p>
      ) : (
        dogs.map((dog) => {
          return <DogCard dog={dog} key={dog.id}></DogCard>;
        })
      )}
      <Pagination totalPages={totalPages} setPage={setPage} />
    </div>
  );
}

export default Dogs;
