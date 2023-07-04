import { HomePageProps } from "@/src/models/pages/HomePageProps";
import { wrapper } from "@/src/store";
import data from "@/src/store/data";
import { GetServerSideProps } from "next";

export const getItemServerSideProps: GetServerSideProps<HomePageProps> =
  wrapper.getServerSideProps((store) => async ({ req, res, params }) => {
    const slug = params?.item;
    store.dispatch(data.actions.setItem({item: slug?.[0]}))
    return { props: { data: [] as string[] } };
  });
