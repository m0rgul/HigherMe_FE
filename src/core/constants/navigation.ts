import {
  Document,
  Home,
  Briefcase,
  Team,
  Person,
  Settings,
} from "components/icons/navIcons";
import translate from "core/helpers/translate";

interface NavigationItem {
  text: string;
  href: string;
  icon: React.FC<{ className: string }>;
}

export const mainNavigation: NavigationItem[] = [
  {
    text: translate("navigation.home"),
    href: "/home",
    icon: Home,
  },
  {
    text: translate("navigation.jobs"),
    href: "/jobs",
    icon: Briefcase,
  },
  {
    text: translate("navigation.assessments"),
    href: "/assessments",
    icon: Document,
  },
  {
    text: translate("navigation.teams"),
    href: "/teams",
    icon: Team,
  },
];

export const userNavigation: NavigationItem[] = [
  {
    text: translate("navigation.profile"),
    href: "/profile",
    icon: Person,
  },
  {
    text: translate("navigation.settings"),
    href: "/settings",
    icon: Settings,
  },
];
