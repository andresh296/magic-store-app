// Generated by https://quicktype.io

export interface CardDB {
  id:          number;
  scryfall_id: string;
  name:        string;
  set_name:    string;
  image_uris:  ImageUris;
  is_foil:     boolean;
  cmc:         number;
  rarity:      Rarity;
  colors:      string[];
  amount:      number;
}

export interface ImageUris {
  small:  string;
  normal: string;
  large:  string;
}

export enum Rarity {
  Mythic = "mythic",
  Rare = "rare",
  Uncommon = "uncommon",
  Common = "common",
}
