import translate from "../helpers/translate";

export const mainNavigation = [
  {
    text: translate("navigation.feed"),
    href: "/feed",
  },
  {
    text: translate("navigation.jobs"),
    href: "/jobs",
  },
  {
    text: translate("navigation.assessments"),
    href: "/assessments",
  },
];

export const userNavigation = [
  {
    text: translate("navigation.profile"),
    href: "/profile",
  },
  {
    text: translate("navigation.settings"),
    href: "/settings",
  },
  {
    text: translate("navigation.signOut"),
    href: "/signOut",
  },
];

export const otherRoutes = [
  {
    text: translate("login.signIn"),
    href: "/login",
  },
  {
    text: translate("register.signUp"),
    href: "/signUp",
  },
];
