import Head from "next/head";

import { getCategories } from "pages/api/[locale]/categories/index";

import { getLayout } from "components/layouts/SiteLayout";

const faqs = [
  {
    id: 1,
    question: "Introduction",
    answer: `We do our best to keep your personal information safe and secure. By using this site, you are consenting to our use of your personal information as set out in this privacy policy. It will change from time to time, so keep an eye on this page. We include the revision date on the header on the main page for your easy reference.`
  },
  {
    id: 2,
    question: "How and what we collect",
    answer:
      "We collect information from you; that you tell us directly; that your internet browser tells us (such as what operating system you are using); that your software tells us, (such as demographic information and your preferences and interests)."
  },
  {
    id: 3,
    question: "What we do with the information we gather",
    answer: `What do we do with your information? It’s all business related; from record keeping and training to improving our products and services. We may sell your information collected by Cookies. It is not personal information and it is sold in an anonymized format only.`
  },
  {
    id: 4,
    question: "Who else gets to see your Personal Information?",
    answer:
      "Third parties help us analyze your information, but they are not allowed to share it."
  },
  {
    id: 5,
    question: "Security, retention and storage of Personal Information",
    answer: `We take a lot of precautions to keep your personal information secure. Through training our employees, contractual provisions to protect your personal information with anyone we do business with, and technical security measures. We keep your information for as long as necessary for the business purpose for which it was collected.`
  },
  {
    id: 6,
    question: "Links to other websites and advertisers",
    answer:
      "There are links to other websites on our Site, including links to advertisers. If you leave this Site via a link, it is the privacy policy of the site you are on, not this Site, that applies."
  },
  {
    id: 7,
    question: "Controlling your Personal Information",
    answer:
      "You can get information about and control your personal information. See # 8 below about how to get in touch to make a request."
  },
  {
    id: 8,
    question: "Contact us",
    answer: "To contact us about privacy concerns: privacy@vadoo.com ."
  }
];

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Privacy Policy
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

Privacy.getLayout = getLayout;

export default Privacy;

export async function getStaticProps({ locale }) {
  const initialCategories = await getCategories(locale);

  return { props: { initialCategories } };
}
