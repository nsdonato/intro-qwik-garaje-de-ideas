import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5
  });
};

export default component$(() => {
  return (
    <>
      <nav class="flex justify-between items-center h-[80px] bg-grey-light p-[40px]">
        <span class="font-extrabold text-[24px]">Where in the world?</span>
      </nav>
      <main class="p-[40px] pb-0">
        <Slot />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Countries App",
  meta: [
    {
      name: "description",
      content: "Countries App for Garaje de Ideas"
    }
  ]
};
