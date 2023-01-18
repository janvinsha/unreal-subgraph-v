import { BigInt } from "@graphprotocol/graph-ts";
import {
  CollectionCreated,
  MarketItemCreated,
  MarketItemSale,
  ProfileCreated,
  ProfileEdited,
} from "../generated/Contract/Contract";

import { Collection, Profile, MarketItem } from "../generated/schema";

export function handleMarketItemSale(event: MarketItemSale): void {
  let marketItem = MarketItem.load(event.params.tokenId.toString());
  if (marketItem == null) {
    marketItem = new MarketItem(event.params.tokenId.toString());
  }
  marketItem.tokenId = event.params.tokenId;
  marketItem.seller = event.params.seller;
  marketItem.owner = event.params.owner;
  marketItem.price = event.params.price;
  marketItem.sold = event.params.sold;
  marketItem.collection = event.params.collection;
  marketItem.name = event.params.name;
  marketItem.image = event.params.image;
  marketItem.category = event.params.category;
  marketItem.description = event.params.description;
  // marketItem.tags = event.params.tags;
  marketItem.save();
}

export function handleCollectionCreated(event: CollectionCreated): void {
  let collection = new Collection(event.transaction.from.toHex());
  collection.collectionId = event.params.collectionId;
  collection.banner = event.params.banner;
  collection.dp = event.params.dp;
  collection.owner = event.params.owner;
  collection.name = event.params.name;
  collection.description = event.params.description;
  // collection.tags = event.params.tags;
  collection.save();
}

export function handleMarketItemCreated(event: MarketItemCreated): void {
  let marketItem = new MarketItem(event.params.tokenId.toString());
  marketItem.tokenId = event.params.tokenId;
  marketItem.seller = event.params.seller;
  marketItem.owner = event.params.owner;
  marketItem.price = event.params.price;
  marketItem.sold = event.params.sold;
  marketItem.collection = event.params.collection;
  marketItem.name = event.params.name;
  marketItem.image = event.params.image;
  marketItem.category = event.params.category;
  marketItem.description = event.params.description;
  // marketItem.tags = event.params.tags;
  marketItem.save();
}

export function handleProfileCreated(event: ProfileCreated): void {
  let profile = Profile.load(event.params.profileId.toHex());
  if (profile == null) {
    profile = new Profile(event.params.profileId.toHex());
  }
  profile.profileId = event.params.profileId;
  profile.banner = event.params.banner;
  profile.dp = event.params.dp;
  profile.name = event.params.name;
  profile.bio = event.params.bio;
  profile.save();
}

export function handleProfileEdited(event: ProfileEdited): void {
  let profile = Profile.load(event.params.profileId.toHex());
  if (profile == null) {
    profile = new Profile(event.params.profileId.toHex());
  }
  profile.profileId = event.params.profileId;
  profile.banner = event.params.banner;
  profile.dp = event.params.dp;
  profile.name = event.params.name;
  profile.bio = event.params.bio;
  profile.save();
}
