import "../styles/App.css";
import React, { useEffect, useState } from "react";

import DogCard from "../components/DogCard";
import DogsService from "../API/DogsService";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/Pagination";
import DogsContainer from "../containers/DogsContainer";

function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [dogsError, setDogsError] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(16);
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

  const pageNumberStyle = {
    marginBottom: "20px",
    marginLeft: "20px",
    fontWeight: "700",
    fontSize: "24px",
  };

  return (
    <div>
      {dogsError && <p>Error: {dogsError}</p>}
      {isLoading ? (
        <p>Dogs is loading...</p>
      ) : (
        <div>
          <div style={pageNumberStyle}>Page {page + 1}</div>
          <DogsContainer dogs={dogs} />
        </div>
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}

export default Dogs;
