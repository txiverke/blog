// @flow

export type Statistic = {
  completed: boolean,
  data: Object,
  message: string,
  error: boolean,
}

export type Item = {
  completed: boolean,
  data: Object,
  message: string,
  error: boolean
}

export type Data = {
  completed: boolean,
  data: Array<Object>,
  message: string,
  error: boolean
}

export type Auth = {
  completed: boolean,
  data: string,
  message: string,
  error: boolean
}

declare type ElementEventTemplate<E> = {
  target: E
} & Event;

declare type InputEvent = ElementEventTemplate<HTMLInputElement>;

declare type ActionType =
'LOAD_STATS_REQUEST' | 'LOAD_STATS_SUCCESS' | 'LOAD_STATS_FAILURE' | 
'LOG_IN_USER_REQUEST' | 'LOG_IN_USER_SUCCESS' | 'LOG_IN_USER_FAILURE' |
'IS_AUTHENTICATED_REQUEST' | 'IS_AUTHENTICATED_SUCCESS' | 'IS_AUTHENTICATED_FAILURE' |
'LOAD_USER_DATA_REQUEST' | 'LOAD_USER_DATA_SUCCESS' | 'LOAD_USER_DATA_FAILURE' |
'CREATE_USER_DATA_REQUEST' | 'CREATE_USER_DATA_SUCCESS' | 'CREATE_USER_DATA_FAILURE' |
'REMOVE_USER_DATA_REQUEST' | 'REMOVE_USER_DATA_SUCCESS' | 'REMOVE_USER_DATA_FAILURE' |
'UPDATE_USER_DATA_REQUEST' | 'UPDATE_USER_DATA_SUCCESS' | 'UPDATE_USER_DATA_FAILURE' |
'LOG_OUT_USER_REQUEST' | 'LOG_OUT_USER_SUCCESS' | 'LOG_OUT_USER_FAILURE' |
'LOAD_POST_DATA_REQUEST' | 'LOAD_POST_DATA_SUCCESS' | 'LOAD_POST_DATA_FAILURE' |
'LOAD_POST_ITEM_REQUEST' | 'LOAD_POST_ITEM_SUCCESS' | 'LOAD_POST_ITEM_FAILURE' | 'UPDATE_POST_ITEM_SUCCESS' |
'UPDATE_POST_DATA_REQUEST' | 'UPDATE_POST_DATA_SUCCESS' | 'UPDATE_POST_DATA_FAILURE';

declare type ActionT<A: ActionType, P> = {
  type: A,
  payload: P
};

export type Action = 
  ActionT<'LOAD_STATS_REQUEST', ''> |
  ActionT<'LOAD_STATS_SUCCESS', Statistic> |
  ActionT<'LOAD_STATS_FAILURE', ''> |
  ActionT<'LOG_IN_USER_REQUEST', ''> |
  ActionT<'LOG_IN_USER_SUCCESS', Data> |
  ActionT<'LOG_IN_USER_FAILURE', ''> |
  ActionT<'LOAD_USER_DATA_REQUEST', ''> |
  ActionT<'LOAD_USER_DATA_SUCCESS', Item> |
  ActionT<'LOAD_USER_DATA_FAILURE', ''> |
  ActionT<'UPDATE_USER_DATA_REQUEST', ''> |
  ActionT<'UPDATE_USER_DATA_SUCCESS', Item> |
  ActionT<'UPDATE_USER_DATA_FAILURE', ''> |
  ActionT<'IS_AUTHENTICATED_REQUEST', ''> |
  ActionT<'IS_AUTHENTICATED_SUCCESS', Auth> |
  ActionT<'IS_AUTHENTICATED_FAILURE', ''> |
  ActionT<'LOAD_POST_DATA_REQUEST', ''> |
  ActionT<'LOAD_POST_DATA_SUCCESS', Data> |
  ActionT<'LOAD_POST_DATA_FAILURE', ''> |
  ActionT<'LOAD_POST_ITEM_REQUEST', ''> |
  ActionT<'LOAD_POST_ITEM_SUCCESS', Item> |
  ActionT<'LOAD_POST_ITEM_FAILURE', ''> |
  ActionT<'UPDATE_POST_ITEM_SUCCESS', ''> |
  ActionT<'UPDATE_POST_DATA_REQUEST', ''> |
  ActionT<'UPDATE_POST_DATA_SUCCESS', Data> |
  ActionT<'UPDATE_POST_DATA_FAILURE', ''> |
  ActionT<'CREATE_POST_DATA_REQUEST', ''> |
  ActionT<'CREATE_POST_DATA_SUCCESS', Data> |
  ActionT<'CREATE_POST_DATA_FAILURE', ''> |
  ActionT<'REMOVE_POST_DATA_REQUEST', ''> |
  ActionT<'REMOVE_POST_DATA_SUCCESS', Data> |
  ActionT<'REMOVE_POST_DATA_FAILURE', ''>;