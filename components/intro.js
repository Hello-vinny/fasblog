export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h4 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Fastech Blog
      </h4>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        This Blog uses API to pull data From a CMS website{' '}
        <a
         /* href="https://nextjs.org/" */
         /* className="underline hover:text-success duration-200 transition-colors" */
        >
         
        </a>{' '}
        {' '} 
         <a
         /* href="https://www.datocms.com/" */
       /*   className="underline hover:text-success duration-200 transition-colors" */
        >
         
        </a>
        
      </h4>
    </section>
  )
}
