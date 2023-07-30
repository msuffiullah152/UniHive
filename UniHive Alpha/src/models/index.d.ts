import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly college_level?: string | null;
  readonly email: string;
  readonly password: string;
  readonly college: string;
  readonly major: string;
  readonly course_interests?: string | null;
  readonly UsersToPosts?: (Posts | null)[] | null;
  readonly UsersToMessages?: (Messages | null)[] | null;
  readonly UsersToGroups?: (UsersGroups | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly college_level?: string | null;
  readonly email: string;
  readonly password: string;
  readonly college: string;
  readonly major: string;
  readonly course_interests?: string | null;
  readonly UsersToPosts: AsyncCollection<Posts>;
  readonly UsersToMessages: AsyncCollection<Messages>;
  readonly UsersToGroups: AsyncCollection<UsersGroups>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerGroups = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Groups, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly group_name?: string | null;
  readonly group_description?: string | null;
  readonly group_location?: string | null;
  readonly college_major?: string | null;
  readonly GroupsToUsers?: (UsersGroups | null)[] | null;
  readonly GroupsToPosts?: (Posts | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroups = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Groups, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly group_name?: string | null;
  readonly group_description?: string | null;
  readonly group_location?: string | null;
  readonly college_major?: string | null;
  readonly GroupsToUsers: AsyncCollection<UsersGroups>;
  readonly GroupsToPosts: AsyncCollection<Posts>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Groups = LazyLoading extends LazyLoadingDisabled ? EagerGroups : LazyGroups

export declare const Groups: (new (init: ModelInit<Groups>) => Groups) & {
  copyOf(source: Groups, mutator: (draft: MutableModel<Groups>) => MutableModel<Groups> | void): Groups;
}

type EagerPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
  };
  readonly id: string;
  readonly post_content?: string | null;
  readonly updatedAt?: string | null;
  readonly isSwarm: boolean;
  readonly swarmLocation?: string | null;
  readonly createdAt: string;
  readonly usersID: string;
  readonly groupsID: string;
}

type LazyPosts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Posts, 'id'>;
  };
  readonly id: string;
  readonly post_content?: string | null;
  readonly updatedAt?: string | null;
  readonly isSwarm: boolean;
  readonly swarmLocation?: string | null;
  readonly createdAt: string;
  readonly usersID: string;
  readonly groupsID: string;
}

export declare type Posts = LazyLoading extends LazyLoadingDisabled ? EagerPosts : LazyPosts

export declare const Posts: (new (init: ModelInit<Posts>) => Posts) & {
  copyOf(source: Posts, mutator: (draft: MutableModel<Posts>) => MutableModel<Posts> | void): Posts;
}

type EagerMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Messages, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly message_content: string;
  readonly createdAt: string;
  readonly usersID: string;
  readonly updatedAt?: string | null;
}

type LazyMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Messages, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly message_content: string;
  readonly createdAt: string;
  readonly usersID: string;
  readonly updatedAt?: string | null;
}

export declare type Messages = LazyLoading extends LazyLoadingDisabled ? EagerMessages : LazyMessages

export declare const Messages: (new (init: ModelInit<Messages>) => Messages) & {
  copyOf(source: Messages, mutator: (draft: MutableModel<Messages>) => MutableModel<Messages> | void): Messages;
}

type EagerUsersGroups = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersGroups, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usersId?: string | null;
  readonly groupsId?: string | null;
  readonly users: Users;
  readonly groups: Groups;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsersGroups = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsersGroups, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usersId?: string | null;
  readonly groupsId?: string | null;
  readonly users: AsyncItem<Users>;
  readonly groups: AsyncItem<Groups>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsersGroups = LazyLoading extends LazyLoadingDisabled ? EagerUsersGroups : LazyUsersGroups

export declare const UsersGroups: (new (init: ModelInit<UsersGroups>) => UsersGroups) & {
  copyOf(source: UsersGroups, mutator: (draft: MutableModel<UsersGroups>) => MutableModel<UsersGroups> | void): UsersGroups;
}