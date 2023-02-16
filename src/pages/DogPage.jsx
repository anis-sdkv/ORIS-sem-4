import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DogsService from "../API/DogsService";
import { useFetching } from "../hooks/useFetching";

const DogPage = () => {
  const [dog, setDog] = useState();
  const state = useLocation().state;
  const { id } = useParams();

  const [fetchDog, isLoading, fetchError] = useFetching(async () => {
    console.log("fetching...");
    const response = await DogsService.getById(id);
    setDog(await response.json());
  });

  const trySetDog = async () => {
    if (state == null) {
      fetchDog();
    } else setDog(state);
  };

  useEffect(() => {
    trySetDog();
    return () => {};
  }, []);

  return (
    <div>
      {isLoading || dog == null ? (
        <p>Dogs is loading... </p>
      ) : (
        <div>
          <p>{dog.name}</p>
          <p>{dog.bred_for}</p>
        </div>
      )}
    </div>
  );
};

export default DogPage;
