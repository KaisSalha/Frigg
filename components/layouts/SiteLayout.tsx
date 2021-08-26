import { useRouter } from "next/router";
import Head from "next/head";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import { useCategories } from "hooks/useCategory";

interface Settings {
  header?: {
    floating?: boolean;
    shadow?: boolean;
    dark?: boolean;
  };
}

interface Props {
  children: React.ReactNode;
}

const SiteLayout = ({ children }: Props) => <>{children}</>;

export const getLayout = (page: any, settings: Settings) => {
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
          floating={settings?.header?.floating ?? true}
          shadow={settings?.header?.shadow ?? true}
          dark={settings?.header?.dark ?? false}
        />
        {page}
        <Footer categories={categories} />
      </SiteLayout>
    </>
  );
};

export default SiteLayout;
