import {
  Resource,
  component$,
  useResource$,
  useSignal
} from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { Card } from "~/components/card/card";
import { SearchIcon } from "~/components/icons/search-icon";

export default component$(() => {
  const inputText = useSignal("");

  const countryResource = useResource$(async ({ track, cleanup }) => {
    track(() => inputText.value);

    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));

    let url =
      "https://restcountries.com/v3.1/all?fields=name,flags,population,altSpellings,region,capital,subregion,tld,currencies,languages,borders,cca2";
    if (inputText.value) {
      url = `https://restcountries.com/v3.1/name/${inputText.value}`;
    }
    const response = await fetch(url, { signal: abortController.signal });
    return await response.json();
  });

  return (
    <>
      <section class="relative flex justify-between">
        <SearchIcon />
        <Form>
          <input
            type="text"
            class="min-w-[320px] lg:w-[480px] xl:w-[480px] h-[56px] bg-grey-light pl-20"
            placeholder="Search for a country..."
            bind:value={inputText}
          />
        </Form>
      </section>
      <section class="grid grid-flow-dense gap-y-[7rem] gap-x-[11rem] grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] mt-10">
        <Resource
          value={countryResource}
          onPending={() => <p class="font-bold text-2xl p-l20">Loading...</p>}
          onResolved={(countries) => <Card countries={countries} />}
          onRejected={(error) => (
            <p class="font-bold text-2xl pl-20">Error: {error}</p>
          )}
        />
      </section>
    </>
  );
});
