import Head from "next/head";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

interface Props {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: Props) => <>{children}</>;

export const getLayout = (page: any) => {
  const { initialCategories: categories } = page.props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <SiteLayout>
        <NavBar categories={categories} />
        {page}
        <Footer />
      </SiteLayout>
    </>
  );
};

export default SiteLayout;
