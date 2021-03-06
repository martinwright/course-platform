const { gql } = require('apollo-server-express');

export const UserQuerySchema = gql`
  type CompletedLesson {
    lessonId: String
    completed: Boolean
    lastUpdated: String
  }

  type UserInfo {
    completedLessons: [CompletedLesson]
  }
`;

export const userMutationSchema = `
  setLessonCompleted(
    isCompleted: Boolean!
    lessonId: String!
    uid: String!
  ): String
  
  setActionItemCompleted(uid: ID! id: String! isCompleted: Boolean!): String
`;
