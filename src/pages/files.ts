import { BackroadNodeManager } from "@backroad/backroad";
import Jimp from "jimp";
import { addSidebar } from "./sidebar";
















export const filesPage = async (br: BackroadNodeManager) => {
  addSidebar(br);
  const [photo] = br.fileUpload({ label: "Pick Image" });
  if (photo) {
    br.write({ body: "# Greyscale image" });
    const image = await Jimp.read(photo.filepath);
    image.greyscale().getBase64(Jimp.AUTO, (err, res) => {
      br.image({ src: res, width: 600 });
    });
  }
};
