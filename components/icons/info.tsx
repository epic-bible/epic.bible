import { createIcon } from "@chakra-ui/vue-next";

const InfoIcon = createIcon({
  name: "InfoIcon",
  viewBox: "0 0 48 48",
  path: `
  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18v-.107c0-.795-.496-1.488-1.117-1.984a5 5 0 1 1 6.235 0c-.622.497-1.118 1.189-1.118 1.984V18m-4 0v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2m-4 0h4m6-6h1M4 12H3m9-8V3m5.657 3.343l.707-.707m-12.02.707l-.708-.707M12 15v-2"/>
  `,
});

export default InfoIcon;