import type { NextPage } from "next";
import { HomePageProps } from "../models/pages/HomePageProps";
import dynamic from "next/dynamic";
import { getWrapperServerSideProps } from "../utils/getServerSideProps/getWrapperServerSideProps";

const HomePage = dynamic(
  () => import("../components/pages/HomePageWithRedux"),
  {
    ssr: true,
  }
);

const ReduxPage: NextPage<HomePageProps> = (props) => {
  return (
      <HomePage />
  );
};

export default ReduxPage;

export const getServerSideProps = getWrapperServerSideProps;
