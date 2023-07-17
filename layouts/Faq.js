import { markdownify } from "@lib/utils/textConverter";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  const svgString = `<svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='342.508px' height='342.508px' viewBox='0 0 342.508 342.508' style='enable-background:new 0 0 342.508 342.508;' xml:space='preserve'><path fill='#8A2BE2' d='M171.254,0C76.837,0,0.003,76.819,0.003,171.248c0,94.428,76.829,171.26,171.251,171.26 c94.438,0,171.251-76.826,171.251-171.26C342.505,76.819,265.697,0,171.254,0z M245.371,136.161l-89.69,89.69 c-2.693,2.69-6.242,4.048-9.758,4.048c-3.543,0-7.059-1.357-9.761-4.048l-39.007-39.007c-5.393-5.398-5.393-14.129,0-19.521 c5.392-5.392,14.123-5.392,19.516,0l29.252,29.262l79.944-79.948c5.381-5.386,14.111-5.386,19.504,0 C250.764,122.038,250.764,130.769,245.371,136.161z'/></svg>`;

  return (
    <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6 ">
         <div class="mt-14 max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-gray-200 mt-24">Najczęściej zadawane pytania</h2>
        </div>
        <div className="section row  -mt-6"  id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
          {faqs.map((faq, index) => (
            <div key={index} >
              <div className="p-12 " >
                <div className="faq-head flex " id="accordion-flush-heading-1">
                <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        width='26px'
        height='26px'
        viewBox='0 0 342.508 342.508'
        style={{ enableBackground: 'new 0 0 342.508 342.508' }}
        dangerouslySetInnerHTML={{ __html: svgString }}
      />
{markdownify(faq.title, "h4","ml-5 text-gray-200")}
                </div>
                {markdownify(faq.answer, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Faq;
