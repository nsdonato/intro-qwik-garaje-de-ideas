/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import type { Country } from "../types/country-types";
import { CardDetailItem } from "./card-detail-item";

interface CardProps {
  country: Country;
}

export const CardDetail = component$(({ country }: CardProps) => {
  const lenguages = Object.values(country.languages)
    .map((item) => item)
    .join(", ");

  return (
    <section class="flex w-full h-[401px] text-white">
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        class="h-full w-[560px] object-fill"
      />
      <section class="pt-10 pl-20 text-[16px]">
        <span class="font-extrabold text-[32px]">{country.name.common}</span>
        <div class="flex leading-8 mt-8">
          <div class="">
            <CardDetailItem
              title="Native Name:"
              subtitle={country.altSpellings[1]}
            />
            <CardDetailItem title="Population:" subtitle={country.population} />
            <CardDetailItem title="Region:" subtitle={country.region} />
            <CardDetailItem title="Sub Region:" subtitle={country.subregion} />
            <CardDetailItem title="Capital:" subtitle={country?.capital[0]} />
          </div>
          <div class="pl-[20px]">
            <CardDetailItem
              title="Top Level Domain:"
              subtitle={country.tld[0]}
            />
            <CardDetailItem
              title="Currencies:"
              subtitle={Object.values(country.currencies)[0].name}
            />
            <CardDetailItem title="Languages:" subtitle={lenguages} />
          </div>
        </div>
      </section>
    </section>
  );
});
