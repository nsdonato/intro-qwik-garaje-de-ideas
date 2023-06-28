/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import type { Country } from "../types/country-types";
import { Link } from "@builder.io/qwik-city";
import { CardDetailItem } from "./card-detail-item";

interface CardProps {
  countries: Country[];
}

export const Card = component$(({ countries }: CardProps) => (
  <>
    {countries.map((country: Country, index: number) => (
      <Link key={`country__card_${index}`} href={`/country/${country.cca2}/`}>
        <div class="w-[264px] h-[336px] rounded-[5px] bg-white">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            class="h-[160px] w-full object-cover rounded-t-[5px]"
          />
          <section class="p-[20px] text-black text-[14px]">
            <span class="font-extrabold text-[18px]">
              {country.name.common}
            </span>
            <div class="mt-[10px]">
              <CardDetailItem
                title="Population:"
                subtitle={country.population}
              />
              <CardDetailItem title="Region:" subtitle={country.region} />
              <CardDetailItem
                title="Capital:"
                subtitle={country?.capital ? country.capital[0] : "No capital"}
              />
            </div>
          </section>
        </div>
      </Link>
    ))}
  </>
));
