import { HomePageProps } from "@/src/models/pages/HomePageProps";
import { TestService } from "@/src/services/testService";
import { GetServerSideProps } from "next";

export const getHomeServerSideProps: GetServerSideProps<HomePageProps> = async (
) => {
  try {
    //server side API should has domain in each API call
    const client = await TestService.initialize();
    const data = await client.getData();
 
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: { data: [] as string[] },
    };
  }
};
