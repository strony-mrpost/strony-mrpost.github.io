import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import Logo from "@layouts/components/Logo";
const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer class="bg-white dark:bg-gray-800">
<div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
  
<div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 ">
    {footer.map((col) => {
        return (
            <div className="mb-8 sm:col-6 lg:col-3" key={col.name}>
                {markdownify(col.name, "h2", "h4 ")}
                <ul className="mt-6">
                    {col?.menu.map((item) => (
                        <li className="mb-1" key={item.text}>
                            <Link href={item.url} rel="">
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    })}
    
    <div className="md-6 sm:col-22 lg:col-64">
    <Link href="/" aria-label="Bigspring">
        <Image
            src={config.site.logo}
            width={config.site.logo_width}
            height={config.site.logo_height}
            alt="social icons"
        />
    </Link>
    {markdownify(footer_content, "p", "mt-3 mb-6  mr-0")}
    <Social source={social} className="social-icons mb-8" />
</div>
</div>

    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="text-center">
        {/* <div className="flex items-center justify-center mb-0 text-2xl font-semibold text-gray-900 dark:text-white">
          <Logo/>
        </div> */}
        {markdownify(copyright,"span","block text-sm text-center text-gray-500 dark:text-gray-400")}
       
    </div>
</div>
</footer>
  );
};

export default Footer;
