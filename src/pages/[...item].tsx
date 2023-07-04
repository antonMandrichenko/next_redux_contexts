import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { HomePageProps } from "../models/pages/HomePageProps";
import { getItemServerSideProps } from "../utils/getServerSideProps/getItemServerSideProps";

const ReduxItem = dynamic(
  () => import("../components/atoms/ReduxItem/ReduxItem"),
  {
    ssr: true,
  }
);


const FeduxItemPage: NextPage<HomePageProps> = (props) => {
  return (
      <ReduxItem/>
  );
};

export default FeduxItemPage;

export const getServerSideProps = getItemServerSideProps

