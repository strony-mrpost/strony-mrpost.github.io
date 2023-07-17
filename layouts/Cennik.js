import Link from "next/link";
// import Cta from "./components/Cta";

function Pricing({ data }) {
  const {
    frontmatter: { title, plans},
  } = data;
  return (
    <>
    <section class="bg-white dark:bg-gray-900">
<div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
<div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12 mt-14">
    <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Dostosowane do potrzeb Twojego biznesu</h2>
    <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">W naszej agencji marketingowej koncentrujemy się na rynkach, gdzie technologia, innowacje i kapitał mogą odblokować długoterminową wartość i napędzać wzrost gospodarczy.</p>
</div>

    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
    {plans.map((plan, index) => (
        <div key={plan.title + index} class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-200 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
             <h3 class="mb-4 text-2xl text-gray-200 font-semibold">{plan.title}</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">{plan.subtitle}</p>
            <div class="flex items-baseline justify-center my-8">
                <span class="mr-2 text-5xl font-extrabold">{plan.price} zł </span>
                <span class="text-gray-500 dark:text-gray-400">/{plan.type}</span>
            </div>
            <ul role="list" class="mb-8 space-y-4 text-left">
            {plan.features.map((feature, index) => (
                      <li class="flex items-center space-x-3" key={index}>
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    
                        <span>{feature}</span>
                      </li>
                    ))}
            </ul>
        <Link href="/kontakt" class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Rozpocznij</Link>
            
        </div>
        ))}
        </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
