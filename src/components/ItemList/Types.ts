import { CompPropsWithChildrenAndStyles, CompPropsWithOnClick } from 'types';

// Item List Types
export type ItemListProps = {
  header: HeaderType;
  tags: TagTypes[];
  initTagsActive?: string[];
  items: ItemType[];
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

// Item Types
export type ItemType = {
  name: string;
  description?: string;
  itemCustomHeader?: { header: string; subHeader: string };
  type?: 'link' | 'modal';
  secret?: boolean;
  tags: string[];
  activeTags?: { [key: string]: boolean };
  tagProps?: TagTypes[];
  externalLinks?: ItemLinkTypes[];
} & CompPropsWithChildrenAndStyles &
  CompPropsWithOnClick;

type ItemLinkTypes = {
  name: string;
  url: string;
};
