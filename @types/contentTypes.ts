import { Asset, Entry } from "contentful";
import { ICampaignGraphic, IContentSection, IImageCollection, IPage, IPageFields } from "./generated/contentful";

/**
 * `contentful-typescript-codegen` doesn't generate an enum of content types
 * so we do it manually here. Github issue at:
 * https://github.com/intercom/contentful-typescript-codegen/issues/54
 */
export enum ContentTypes {
    AlumniSpotlightCollection = 'alumniSpotlightCollection',
    AlumSpotlight = 'alumSpotlight',
    CampaignGraphic = 'campaignGraphic',
    ContentSection = 'contentSection',
    Event = 'event',
    EventCalendar = 'eventCalendar',
    ImageCollection = 'imageCollection',
    NavigationItem = 'navigationItem',
    NavigationMenu = 'navigationMenu',
    Page = 'page',
};

/** Collections which map to single entries */
export const CollectionMap = {
    [ContentTypes.AlumniSpotlightCollection]: [
        ContentTypes.AlumSpotlight,
    ],
    [ContentTypes.EventCalendar]: [
        ContentTypes.Event,
    ],
}

/** Get the fields from an array-like entry */
// @ts-ignore TODO: i just need to get this pushed
export type IEntryFieldsItem<T extends Entry<IPageFields | IPageFieldsItem['fields']>> = T['fields']['content'][number];

/** Top-level collections on the page (announcement collection, event calendar, etc). `IContentSection` and `ICampaignGraphic` are excluded since they aren't a collection. */
export type IPageFieldsItem = Exclude<IEntryFieldsItem<IPage>, IContentSection | ICampaignGraphic>;

/** Child items on the page (content section, announcement, etc).*/
export type IPageItemFieldsItem = Exclude<IEntryFieldsItem<IPageFieldsItem>, Asset> | IContentSection | ICampaignGraphic;

export const isIPage = (block: IPage | IPageFieldsItem | IPageItemFieldsItem): block is IPage => (block as IPage).sys?.contentType?.sys?.id === 'page';

export const isIPageFieldsItem = (block: IPageFieldsItem | IPageItemFieldsItem): block is IPageFieldsItem => Array.isArray((block as IPageFieldsItem).fields?.content);

export const isIImageCollection = (block: IPageFieldsItem | IPageItemFieldsItem): block is IImageCollection => block.sys.contentType.sys.id === "imageCollection"