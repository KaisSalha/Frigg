import { useRouter } from "next/router";
import Head from "next/head";
import NavBar from "../NavBar";
import Footer from "../../components/Footer";
import { useCategories } from "../../hooks/useCategory";

const SiteLayout = ({ children }) => <>{children}</>;

export const getLayout = page => {
  const { locales } = useRouter();

  const { initialCategories } = page.props;

  const { categories } = useCategories(initialCategories);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <SiteLayout>
        <NavBar
          categories={categories}
          locales={locales}
          floating={true}
          shadow={true}
          // dark={true}
        />
        {page}
        <Footer categories={categories} />
      </SiteLayout>
    </>
  );
};

export default SiteLayout;
