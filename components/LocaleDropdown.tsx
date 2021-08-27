import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import styles from "styles/components/LocaleDropdown.module.scss";

interface Props {
  dark: boolean;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const LocaleDropdown = ({ dark }: Props) => {
  const router = useRouter();
  const { locale: active, locales } = router;

  return (
    <Menu as="div" className={styles.menu}>
      {({ open }) => (
        <>
          <>
            <Menu.Button
              className={classNames(
                styles.button,
                dark ? styles["button--dark"] : ""
              )}
            >
              {active == "ar" ? "عر" : active}

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
            <Menu.Items
              static
              className={classNames(
                styles.dropdown,
                dark ? "" : styles["dropdown--dark"]
              )}
            >
              {locales?.map(locale => (
                <Menu.Item key={locale}>
                  {() => (
                    <a href={locale == "en" ? "/" : `/${locale}`}>
                      <div
                        className={classNames(
                          locale == active ? styles.active : styles.inactive,
                          styles.item
                        )}
                      >
                        {locale == "ar" ? "عر" : locale}
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
