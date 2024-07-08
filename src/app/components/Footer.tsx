"use client";

import { Footer } from "flowbite-react";

export function ComponentFooter() {
  return (
    <Footer container className="bg-green-primary rounded-none">
      <Footer.Copyright
        href="#"
        by="DSC.TECHASSISTENCE™"
        year={2024}
        className="text-green-botton"
      />
      <Footer.LinkGroup className="mt-2">
        <h1 className="mx-3">Desenolvido por: Felipe Cunha</h1>
        <Footer.Link href="https://github.com/cunhafelipe">Github</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
