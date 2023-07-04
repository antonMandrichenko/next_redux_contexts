import { HomePageProps } from "@/src/models/pages/HomePageProps";
import { TestService } from "@/src/services/testService";
import { wrapper } from "@/src/store";
import data from "@/src/store/data";
import { GetServerSideProps } from "next";

export const getWrapperServerSideProps: GetServerSideProps<HomePageProps> =
  wrapper.getServerSideProps((store) => async ({ req, res, params }) => {
    const client = await TestService.initialize();
    const result = await client.getData();
    store.dispatch(data.actions.setItems({ items: result }));
    return { props: { data: [] as string[] } };
  });
