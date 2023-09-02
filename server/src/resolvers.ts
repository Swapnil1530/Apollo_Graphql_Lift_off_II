import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    
    tracksForHome: (parent, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
