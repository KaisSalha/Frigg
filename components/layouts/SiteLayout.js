import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useCategories } from "../../hooks/useCategory";

const SiteLayout = ({ children }) => <>{children}</>;

export const getLayout = page => {
  const { locales } = useRouter();

  const { initialCategories, initialLocales } = page.props;

  const { categories } = useCategories(initialCategories);

  return (
    <SiteLayout>
      <Header categories={categories} locales={locales} />
      {page}
      <Footer categories={categories} />
    </SiteLayout>
  );
};

export default SiteLayout;
