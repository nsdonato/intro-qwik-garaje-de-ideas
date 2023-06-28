/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";

interface CardDetailItemProps {
  title: string;
  subtitle: string | number;
}

export const CardDetailItem = component$(
  ({ title, subtitle }: CardDetailItemProps) => {
    return (
      <div class="mt-[10px]">
        <span class="font-semibold ">{title}</span>{" "}
        <span class="font-light ">{subtitle}</span>
      </div>
    );
  }
);
