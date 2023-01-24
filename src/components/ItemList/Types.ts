import { CompPropsWithChildrenAndStyles, CompPropsWithOnClick } from 'types';

// Item List Types
export type ItemListbProps = {
  header: HeaderType;
  tags: TagTypes[];
  initTagsActive?: string[];
  items: ItemTypes[];
  key?: string;
} & CompPropsWithChildrenAndStyles;

type HeaderType = {
  styles?: React.CSSProperties;
  headerText: string;
  headerSubtext?: string;
};

export type TagTypes = {
  name: string;
  color?: string;
  textColor?: string;
};

type ItemTypes = {
  name: string;
  itemCustomHeader?: any;
  description: string;
  tags: string[];
  externalLinks?: ExternalLinkTypes[];
};

type ExternalLinkTypes = {
  name: string;
  url: string;
};

// Item Types
export type ItemType = {
  name: string;
  description?: string;
  itemCustomHeader?: string | React.ReactNode | JSX.Element;
  tags: string[];
  activeTags: { [key: string]: boolean };
  tagProps: TagTypes[];
  externalLinks?: ItemLinkTypes[];
} & CompPropsWithChildrenAndStyles &
  CompPropsWithOnClick;

type ItemLinkTypes = {
  name: string;
  url: string;
};
