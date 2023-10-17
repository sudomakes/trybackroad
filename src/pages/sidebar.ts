import { BackroadNodeManager } from "@backroad/backroad";

export const addSidebar = (br: BackroadNodeManager) => {
  br.sidebar({}).linkGroup({
    items: [
      { href: "/", label: "Home 🏠" },
      { label: "Files 📂", href: "/files" },
      { label: "Dashboard 📊", href: "/sip" },
    ],
  });
};
