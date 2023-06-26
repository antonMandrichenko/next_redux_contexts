import type { NextPage } from "next";
import { getHomeServerSideProps } from "../utils/getServerSideProps/getHomeServerSideProps";
import { HomePageProps } from "../models/pages/HomePageProps";
import dynamic from "next/dynamic";
import DataProvider from "../contexts/DataContext/DataContext";

const HomePage = dynamic(
  () => import("../components/pages/HomePageServerSide"),
  {
    ssr: true,
  }
);

const NewsfeedPage: NextPage<HomePageProps> = (props) => {
  return (
    <DataProvider data={props.data}>
      <HomePage {...props} />
    </DataProvider>
  );
};

export default NewsfeedPage;

export const getServerSideProps = getHomeServerSideProps;
