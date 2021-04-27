import Header from "../../components/Header";
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
    </SiteLayout>
  );
};

export default SiteLayout;
