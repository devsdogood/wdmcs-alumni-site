import { useState, useEffect } from "react";
import { IImageCollection } from "../@types/generated/contentful";

// @ts-ignore
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
// import { getWindowDimensions } from "./util";

type ImageCollectionProps = {
  entry: IImageCollection;
};

const ImageCollection: React.FC<ImageCollectionProps> = ({ entry }) => {
  const [size, setSize] = useState<{ width?: number, height?: number }>({width: undefined, height: undefined})

  useEffect(() => {
    setSize({
        width: window.innerWidth,
        height: window.innerHeight,
    });
  }, []);

  const items = entry.fields.content.map((image) => ({
    itemId: image.sys.id,
    mediaUrl: image.fields.file.url,
    metaData: {
      type: "image",
      height: image.fields.file.details.image?.height,
      width: image.fields.file.details.image?.width,
      title: image.fields.title,
      description: image.fields.description,
      focalPoint: [0, 0],
    },
  }));

  return size.width ? (
    <ProGallery
      items={items}
      container={{
        width: size.width,
        height: size.height,
      }}
    />
  ) : <></>;
};

export default ImageCollection;
