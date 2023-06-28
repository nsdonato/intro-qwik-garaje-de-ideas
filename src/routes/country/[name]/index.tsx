/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, useLocation } from "@builder.io/qwik-city";
import { CardDetail } from "~/components/card/card-detail";
import { ArrowLeft } from "~/components/icons/arrow-left";

export const useProductDetails = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${requestEvent.params.name}`
  );
  return await res.json();
});

export default component$(() => {
  const loc = useLocation();
  const countries = useProductDetails();

  return (
    <main>
      <Link
        class="bg-white w-[136px] h-[40px] text-black flex justify-center items-center rounded-[5px]"
        href={loc.prevUrl?.origin}
      >
        <ArrowLeft />
        <span class="pl-[20px]">Back</span>
      </Link>
      <section class="mt-10">
        {countries.value ? (
          <CardDetail country={countries.value[0]} />
        ) : (
          <p class="font-bold text-2xl p-20">Loading...</p>
        )}
      </section>
    </main>
  );
});
