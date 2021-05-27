import Head from "next/head";

import { getCategories } from "pages/api/[locale]/categories/index";
import { getLocales } from "pages/api/locales/index";

import { getLayout } from "components/layouts/SiteLayout";

const faqs = [
  {
    id: 1,
    question: "Effective Date",
    answer: `Your use of this Site after December 30, 2021 is governed by these terms.`
  },
  {
    id: 2,
    question: "Introduction",
    answer:
      "By using this Site you are deemed to agree with these terms. It will change from time to time, so keep an eye on this page. We include the revision date on the header on the main page for your easy reference."
  },
  {
    id: 3,
    question: "Access",
    answer: `If you are under 16, you must get permission to use the Site and in any event be older than 13. If you provide permission, you are responsible for the minor's activity. And you understand that certain Content may not be appropriate.`
  },
  {
    id: 4,
    question: "Privacy",
    answer: "Personal information is governed by our Privacy Policy."
  },
  {
    id: 5,
    question: "Links to and from Other Websites",
    answer: `If you use a link on this Site to another website, including advertisers’ sites, that site’s terms of use and policies govern. We are not liable for anything once you are leave site.`
  },
  {
    id: 6,
    question: "Information Contained on Our Sites",
    answer:
      "We do our best to provide timely and correct information but given the nature of the information, it is provided without warranty of any kind."
  },
  {
    id: 7,
    question: "License, Copyright and Trademarks",
    answer: "All information on the Site is subject to copyright."
  },
  {
    id: 8,
    question: "Usage Restrictions",
    answer:
      "You may not use the Site for anything unlawful, harmful to others, targeting vulnerable sectors or sending spam. You will not access the site by automated means without permission. You will not interfere with the operation of our Site in any way."
  },
  {
    id: 9,
    question: "Submissions and Postings",
    answer:
      "Any Contributions you submit are considered non-confidential and non-proprietary."
  },
  {
    id: 10,
    question: "Violations of the Terms of Use",
    answer: "If you violate these Terms of Use, we may take the legal actions."
  },
  {
    id: 11,
    question: "Disclaimer of Liability",
    answer:
      "We are not liable to you or any third party for any loss whatsoever."
  },
  {
    id: 12,
    question: "Jurisdictional Clause",
    answer:
      "These Terms of Use are governed by the Law of Ontario and of Canada."
  }
];

const Terms = () => {
  return (
    <>
      <Head>
        <title>Terms of Use</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Terms of Use
          </h1>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {faqs.map(faq => (
                <div
                  key={faq.id}
                  className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

Terms.getLayout = getLayout;

export default Terms;

export async function getStaticProps() {
  const initialCategories = await getCategories("en");

  const initialLocales = await getLocales();

  return { props: { initialCategories, initialLocales } };
}
