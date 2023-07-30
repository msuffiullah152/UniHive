// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, Groups, Posts, Messages, UsersGroups } = initSchema(schema);

export {
  Users,
  Groups,
  Posts,
  Messages,
  UsersGroups
};