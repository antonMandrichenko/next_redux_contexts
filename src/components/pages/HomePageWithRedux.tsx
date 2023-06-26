import { HomePageProps } from "@/src/models/pages/HomePageProps";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import data from "@/src/store/data";
import ReduxItems from "../atoms/ReduxItems/ReduxItems";
import { AppDispatch } from "@/src/store";

export default function HomePageWithRedux() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    console.log('loading')
   dispatch(data.actions.get(undefined))
  }, [])

  return (
    <ReduxItems/>
  );
}
