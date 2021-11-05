import React from "react";
import {
  ContentTypes,
  IPageFieldsItem,
  IPageItemFieldsItem,
  isIImageCollection,
  isIPage,
  isIPageFieldsItem,
} from "../@types/contentTypes";
import { IPage } from "../@types/generated/contentful";
import AlumSpotlightPreview from "../components/previews/AlumSpotlightPreview";
import CampaignGraphic from "../components/views/CampaignGraphic";
import ContentSection from "../components/views/ContentSection";
import EventPreview from "../components/previews/EventPreview";
import AlumniSpotlightCollection from "./AlumniSpotlightCollection";
import EventCalendar from "./EventCalendar";
import ImageCollection from "./ImageCollection";

type BlockRendererProps = {
  block: IPage | IPageFieldsItem | IPageItemFieldsItem;
};

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  let children: JSX.Element[] = [];

  const getKey = (content: BlockRendererProps['block']) => `${content.sys.contentType}-${content.sys.id}`;

  if (isIPage(block)) {
    // Render all page elements through BlockRenderer
    return (
      <>
        {block.fields.content.map((content) => (
          <BlockRenderer key={getKey(content)} block={content} />
        ))}
      </>
    );
  }

  // ImageCollection contains children of type `Asset`, which causes type errors when 
  // using the child's contentType for block rendering
  if (isIImageCollection(block)) {
    const Component = ContentTypeMap[ContentTypes.ImageCollection];
    return <Component key={getKey(block)} entry={block} />
  }

  if (isIPageFieldsItem(block)) {
    children = block.fields.content.map((content) => (
      <BlockRenderer key={getKey(content)} block={content} />
    ));
  }

  const contentTypeId = block.sys.contentType.sys.id;
  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  return (
    // @ts-ignore i'm not sure why TS isn't picking up Component as the type of its map value
    <Component key={getKey(block)} entry={block}>
      {children}
    </Component>
  );
};

const ContentTypeMap = {
  [ContentTypes.AlumSpotlight]: AlumSpotlightPreview,
  [ContentTypes.AlumniSpotlightCollection]: AlumniSpotlightCollection,
  [ContentTypes.CampaignGraphic]: CampaignGraphic,
  [ContentTypes.ContentSection]: ContentSection,
  [ContentTypes.Event]: EventPreview,
  [ContentTypes.EventCalendar]: EventCalendar,
  [ContentTypes.ImageCollection]: ImageCollection,
};

export default BlockRenderer;
