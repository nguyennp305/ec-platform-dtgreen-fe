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
        className="overflow-hidden bg-red-100 dark:bg-gray-dark pt-28"
      >
        
        <div className="background-intro relative z-10">
        <div className="area">
          <ul className="circles">
            {circles}
          </ul>
        </div>
          <div className="flex flex-wrap">
            <div className="w-full py-24">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="animate-bounce mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  DT GREEN
                </h1>
                <p className="animate-bounce mb-12 text-base !leading-relaxed text-white sm:text-lg md:text-xl">
                  Thảo mộc xanh - Sống an lành
                </p>
                <div className="button-group-intro flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/"
                    className="watch-now button-intro rounded-lg bg-green-750 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-green-550"
                  >
                    Xem ngay
                  </Link>
                  <Link
                    href="/"
                    className="buy-now button-intro inline-block rounded-lg px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out bg-white/10 dark:text-white hover:bg-white/5"
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
