import Link from "next/link";
import { useRouter } from "next/router";
import Base from "@layouts/Baseof";
import Image from "next/image";
import mapImg from "../../public/images/POL_location_map.png"
import feature1 from "../../public/images/feature-1.png"
import feature2 from "../../public/images/feature-2.png"

const Ofertas = () => {
  const cities = [
    { name: 'Wrocław', nameSite: 'w  Wrocławiu', slug: 'oferta-cennik-marketing-wroclaw' },
    { name: 'Bydgoszcz', nameSite: 'w  Bydgoszczy', slug: 'oferta-cennik-marketing-bydgoszcz' },
    { name: 'Lublin', nameSite: 'w  Lublinie', slug: 'oferta-cennik-marketing-lublin' },
    { name: 'Zielona Góra', nameSite: 'w  Zielonej Górze', slug: 'oferta-cennik-marketing-zielona-gora' },
    { name: 'Łódź', nameSite: 'w  Łodzi', slug: 'oferta-cennik-marketing-lodz' },
    { name: 'Kraków', nameSite: 'w  Krakowie', slug: 'oferta-cennik-marketing-krakow' },
    { name: 'Warszawa', nameSite: 'w  Warszawie', slug: 'oferta-cennik-marketing-warszawa' },
    { name: 'Opole', nameSite: 'w  Opolu', slug: 'oferta-cennik-marketing-opole' },
    { name: 'Rzeszów', nameSite: 'w  Rzeszowie', slug: 'oferta-cennik-marketing-rzeszow' },
    { name: 'Białystok', nameSite: 'w  Białystoku', slug: 'oferta-cennik-marketing-bialystok' },
    { name: 'Gdańsk', nameSite: 'w  Gdańsku', slug: 'oferta-cennik-marketing-gdansk' },
    { name: 'Katowice', nameSite: 'w  Katowicach', slug: 'oferta-cennik-marketing-katowice' },
    { name: 'Kielce', nameSite: 'w  Kielcach', slug: 'oferta-cennik-marketing-kielce' },
    { name: 'Olsztyn', nameSite: 'w  Olsztynie', slug: 'oferta-cennik-marketing-olsztyn' },
    { name: 'Poznań', nameSite: 'w  Poznaniu', slug: 'oferta-cennik-marketing-poznan' },
    { name: 'Szczecin', nameSite: 'w  Szczecinie', slug: 'oferta-cennik-marketing-szczecin' },
  ];
  
  const router = useRouter();
  const miasto = router.query.miasto

  const selectedCity = cities.find(city => city.slug === miasto);
  const cityName = selectedCity ? selectedCity.nameSite : '';

  
  return (
    <Base>
<section class="bg-gray-50 dark:bg-gray-800">
    <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* <!-- Row --> */}
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 mt-24">
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Wsparcie w obszarze social mediów i reklamy {cityName} </h2>
                <p class="mb-8 font-light lg:text-xl">Oferujemy kompleksowe rozwiązania w zakresie zarządzania social mediami i reklamy dla Twojej firmy {cityName}. Nasz zespół doświadczonych specjalistów pomoże Ci w osiągnięciu sukcesu w tych obszarach. Dzięki naszym usługom, możesz efektywnie zarządzać kampaniami reklamowymi, zwiększać zasięg Twojej marki i budować silną obecność w mediach społecznościowych. Pozwól nam wesprzeć rozwój Twojej firmy poprzez skuteczne wykorzystanie potencjału social mediów i reklamy.</p>
                {/* <!-- List --> */}
                <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                    <li class="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Kampanie reklamowe</span>
                    </li>
                    <li class="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Zarządzanie social mediami</span>
                    </li>
                </ul>
                <p class="mb-8 font-light lg:text-xl">Zaufaj nam, abyśmy pomogli Ci w osiągnięciu sukcesu poprzez skuteczną obsługę social mediów i reklamy.</p>
            </div>
            <Image 
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src={feature1}
          alt="feature image 2"/>
       </div>
        {/* <!-- Row --> */}
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Image 
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src={feature2}
          alt="feature image 2"/>
            {/* <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/feature-2.png" alt="feature image 2"> */}
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Zadbaj o swoje media społecznościowe i reklamę {cityName}</h2>
                <p class="mb-8 font-light lg:text-xl">Oferujemy kompleksową obsługę Twoich mediów społecznościowych oraz kampanii reklamowych. Nasz doświadczony zespół pomoże Ci w kreowaniu skutecznych strategii, projektowaniu atrakcyjnych materiałów oraz osiąganiu wyników w marketingu.</p>
                {/* <!-- List --> */}
                <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                    <li class="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Kreowanie skutecznych strategii</span>
                    </li>
                    <li class="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Projektowanie atrakcyjnych materiałów</span>
                    </li>
                    <li class="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Osiąganie wyników w marketingu</span>
                    </li>
                    <li class="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Zwiększenie zasięgu Twojej marki</span>
                    </li>
                    <li class="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Monitorowanie wyników reklamy</span>
                    </li>
                </ul>
                <p class="font-light lg:text-xl">Zadbaj o swoje media społecznościowe i reklamę bez trudności. Osiągnij sukces w marketingu dzięki naszemu doświadczonemu zespołowi.</p>
            </div>
        </div>
    </div>
  </section>
    <div>
    <section class="bg-white dark:bg-gray-900">
  <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
    <div class="col-span-2 mb-8">
      <p class="text-lg font-medium text-purple-600 dark:text-purple-500">Zaufane na całym świecie</p>
      <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">Zaufane przez ponad 600 milionów użytkowników i 10 000 zespołów</h2>
      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Nasze rygorystyczne standardy bezpieczeństwa i zgodności są sercem naszej działalności. Pracujemy nieustannie, aby chronić Ciebie i Twoich klientów {cityName}.</p>
      <div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
        <div>
          <a href="#" class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
          Zapoznaj się z przewodnikiem o zgodności
            <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
        <div>
          <a href="#" class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
            Odwiedź Centrum Zaufania
            <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
      <div>
        <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>
        <h3 class="mb-2 text-2xl font-bold dark:text-white">99,99% dostępności</h3>
        <p class="font-light text-gray-500 dark:text-gray-400">Dla Novus Global, bez przestojów związanych z konserwacją</p>
      </div>
      <div>
        <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
        <h3 class="mb-2 text-2xl font-bold dark:text-white">Ponad 600 milionów użytkowników</h3>
        <p class="font-light text-gray-500 dark:text-gray-400">Zaufane przez ponad 600 milionów użytkowników na całym świecie</p>
      </div>
      <div>
        <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg>
        <h3 class="mb-2 text-2xl font-bold dark:text-white">Ponad 100 krajów</h3>
        <p class="font-light text-gray-500 dark:text-gray-400">Wykorzystywane przez Novus Global do tworzenia skutecznych strategii marketingowych</p>
      </div>
      <div>
        <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
        <h3 class="mb-2 text-2xl font-bold dark:text-white">Ponad 5 milionów</h3>
        <p class="font-light text-gray-500 dark:text-gray-400">Transakcji na dzień</p>
      </div>
    </div>
  </div>
</section>


      <section class="bg-gray-50 dark:bg-gray-800">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
    <figure class="max-w-screen-md mx-auto">
      <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
      </svg> 
      <blockquote>
        <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">Novus Global to niesamowita agencja marketingowa. Posiadają bogate doświadczenie i oferują usługi najwyższej jakości, począwszy od tworzenia kreatywnych kampanii reklamowych po skuteczne zarządzanie mediami społecznościowymi. Gorąco polecamy wszystkim firmom, które chcą wzmocnić swoje działania marketingowe.</p>
      </blockquote>
      <figcaption class="flex items-center justify-center mt-6 space-x-3">
        {/* <!-- <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> --> */}
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <div class="pr-3 font-medium text-gray-900 dark:text-white">Michael Gough</div>
          <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO w Google</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section>

    <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <h2 >Obszar naszej działalności</h2>
            <div className="row  items-center justify-center">
            <div className="sm:grid-cols-4 md:col-12 lg:col-8 grid md:grid-cols-6 mt-4 lg:grid-cols-4 gap-8">
                {cities.map((city, index) => (
                    <h5 key={index} className="h7">
                    <Link className="hover:text-primary mr-5" href={`${city.slug}`}>
                        {city.name}
                    </Link>
                    </h5>
                ))}
            </div>
            <div className="md:col-5 ml-5 lg:col-3">
                <Image
                src={mapImg}
                alt="call to action image"
                width={900}
                height={853}
                />
            </div>
            </div>
        </div>
    </section>
    </div>   
      </Base>
  );
}

export default Ofertas;