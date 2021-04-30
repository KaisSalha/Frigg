import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useLocales from "../../hooks/useLocales";
import { useCategories } from "../../hooks/useCategory";

const SiteLayout = ({ children }) => <div>{children}</div>;

export const getLayout = page => {
  const { initialCategories, initialLocales } = page.props;

  const { categories } = useCategories(initialCategories);
  const { locales } = useLocales(initialLocales);

  return (
    <SiteLayout>
      <Header categories={categories} locales={locales} />
      {page}
      <Footer categories={categories} />
    </SiteLayout>
  );
};

export default SiteLayout;
