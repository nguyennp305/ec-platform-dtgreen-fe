import Link from "next/link";
import "@/styles/animated/product-intro.scss";

const ProductionIntro = () => {
  const circles = Array.from({ length: 20 }, (_, index) => (
    <li key={index}></li>
  ));

  return (
    <>
      <section
        id="home"
        className="background-intro relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="area">
          <ul className="circles">
            {circles}
          </ul>
        </div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Free and Open-Source Next.js Template for Startup & SaaS
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Startup is free Next.js template for startups and SaaS
                  business websites comes with all the essential pages,
                  components, and sections you need to launch a complete
                  business website, built-with Next 13.x and Tailwind CSS.
                </p>
                <div className="button-group-intro flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/"
                    className="watch-now button-intro rounded-sm bg-green-750 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-green-550"
                  >
                    Xem ngay
                  </Link>
                  <Link
                    href="/"
                    className="buy-now button-intro inline-block rounded-sm px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out bg-white/10 dark:text-white hover:bg-white/5"
                  >
                    Mua ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductionIntro;
