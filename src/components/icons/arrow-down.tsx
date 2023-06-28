import { component$ } from "@builder.io/qwik";

export const ArrowDown = component$(() => {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height={18}
      width={18}
      class="absolute top-6 right-6"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z"
        fill="currentColor"
      />
    </svg>
  );
});
