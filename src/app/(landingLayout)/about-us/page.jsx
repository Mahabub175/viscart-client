import about from "@/assets/images/about.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="lg:flex items-center justify-around mb-32">
        <div className="lg:w-3/6">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Our Company Overview
          </h1>
          <p className="text-textColor mt-6">
            Viscart brand is one of the most reliable motor oil manufacturers,
            which is engaged in the production of high quality products with a
            history of more than decades in the industry. In order to get more
            information about other aspects and products of the Viscart brand,
            you can use the following buttons:
          </p>
          <hr className="my-6" />
          <p className="text-textColor">
            The meaning of production in Viscart is the creation, development,
            and the path to progress, and the starting point to achieve the
            goals that we all have the renowned brand, with over 20 years of
            experience in the oil and petrochemical industry, we officially
            started our activities in the field of design, engineering,
            construction of refinery equipment, and the production of various
            motor and industrial lubricants in the year 1390 (2011)
          </p>
        </div>
        <Image
          src={about}
          alt="contact image"
          height
          width
          className="rounded-xl mt-10 lg:mt-0"
        />
      </section>
    </>
  );
};

export default page;
