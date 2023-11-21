import { Twitter, Github, Mail } from "lucide-react";
import ThemeSwitcher from "~/components/ThemeSwitcher";
import LinkBento from "~/components/LinkBento";
import Profile from "~/components/Profile";
import Blog from "~/components/Blog";
import PSN from "~/components/PSN";
import Spotify from "~/components/Spotify";
import Online from "~/components/Online";
import Time from "~/components/Time/Time";
import Weekly from "~/components/Weekly";

export default function Home() {
  return (
    <div className="container mx-auto mt-5 grid grid-cols-3 gap-2 p-0 md:gap-4 lg:grid-cols-4 xl:px-20">
      <Profile />
      <LinkBento
        classname="bg-sky-200 dark:bg-sky-700 "
        icon={<Twitter className="link_bento_icon dark:stroke-gray-900" />}
        url="https://twitter.com/youngle316"
      />
      <ThemeSwitcher />
      <LinkBento
        classname="bg-indigo-400 dark:bg-indigo-700"
        icon={<Github className="link_bento_icon dark:stroke-gray-900" />}
        url="https://github.com/youngle316"
      />
      <Blog />
      <LinkBento
        classname="bg-violet-400 dark:bg-violet-700"
        icon={<Mail className="link_bento_icon dark:stroke-gray-900" />}
        url="mailto:youngle316@gmail.com"
      />
      <Weekly />
      <PSN />
      <Online />
      <Spotify />
      <Time />
    </div>
  );
}
