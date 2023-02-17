import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DogsService from "../API/DogsService";
import DogInfoCard from "../components/DogInfoCard";
import { useFetching } from "../hooks/useFetching";

const DogPage = () => {
  const [dog, setDog] = useState();
  const state = useLocation().state;
  const { id } = useParams();

  const [fetchDog, isLoading, fetchError] = useFetching(async () => {
    console.log("fetching...");
    const response = await DogsService.getById(id);
    const res = await response.json();
    if (Object.keys(res).length !== 0) {
      const dogImage = await (await DogsService.getImage(id)).json();
      res["image"] = dogImage[0];
    }
    setDog(res);
  });

  const trySetDog = async () => {
    if (state == null) {
      fetchDog();
    } else setDog(state);
  };

  useEffect(() => {
    trySetDog();
  }, []);

  const tryRender = () => {
    if (!dog || Object.keys(dog).length === 0) {
      return (
        <div>
          An error has occurred, perhaps a dog with this id does not exist.
        </div>
      );
    } else return <DogInfoCard dog={dog} />;
  };

  return isLoading ? <div>loading...</div> : tryRender();
};

export default DogPage;
