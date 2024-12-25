import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div
        className="
        container500
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto
        md:items-center
        lg:items-start
        md:flex-row md:flex-nowrap"
      >
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <Link href={'/'} className="text-2xl text-white">
            Conveen
          </Link>
        </div>
        <div className="justify-between w-full mt-4 text-center lg:flex">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2"></div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <ul className="mb-8 space-y-2 list-none"></ul>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <Image
              src="/Conveen-NOBG.png"
              alt="Hero"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center -mt-12">
        <p className="text-center text-white pb-2">
          ©{currentYear} All rights reserved Gigallion.
        </p>
      </div>
    </footer>
  );
}
