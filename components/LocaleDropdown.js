import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import styles from "styles/components/LocaleDropdown.module.scss";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LocaleDropdown = () => {
  const router = useRouter();
  const { locale: active, locales } = router;

  return (
    <Menu as="div" className={styles.menu}>
      {({ open }) => (
        <>
          <>
            <Menu.Button className={styles.button}>
              {active}
              <ChevronDownIcon className={styles.icon} aria-hidden="true" />
            </Menu.Button>
          </>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items static className={styles.dropdown}>
              {locales.map(locale => (
                <Menu.Item key={locale}>
                  {({ active }) => (
                    <a href={locale}>
                      <div
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {locale}
                      </div>
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default LocaleDropdown;
