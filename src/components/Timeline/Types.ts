import { SemanticICONS } from 'semantic-ui-react';
import { CompPropsWithChildrenAndStyles } from 'types';

export type TimelineType = {
  title: string;
  items: TimelineItem[];
} & CompPropsWithChildrenAndStyles;

interface TimelineItem {
  date: string;
  isCurrent?: boolean;
  eventType?: string;
  content: string;
  contentExtras?: TimelineItemExtras;
  additionalTimeframeEvents?: TimelineAdditionalItem[];
}
// The 'type' propertiess in the next two types below would have the options like 'list' | 'image' | etc... and that would determine how the component would have displayed the things but for the sake of time, I left it open as a string
type TimelineAdditionalItem = {
  date: string;
  content?: string;
  type?: string;
  contentExtras?: TimelineItemExtras;
};

type TimelineItemExtras = {
  type: string;
  list?: string[];
  iconList?: IconListType[];
};

type IconListType = {
  icon: SemanticICONS | any;
  content: string;
};
