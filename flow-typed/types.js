// @flow

export type Statistic = {
  completed: boolean,
  data: Object,
  message: string
}

export type User = {
  completed: boolean,
  data: Object,
  message: string
}

export type Data = {
  completed: boolean,
  data: Array<Object>,
  message: string
}

export type Auth = {
  completed: boolean,
  data: string,
  message: string
}

declare type ActionType =
'LOAD_STATS_REQUEST' | 'LOAD_STATS_SUCCESS' | 'LOAD_STATS_FAILURE' | 
'LOG_IN_USER_REQUEST' | 'LOG_IN_USER_SUCCESS' | 'LOG_IN_USER_FAILURE' |
'IS_AUTHENTICATED_REQUEST' | 'IS_AUTHENTICATED_SUCCESS' | 'IS_AUTHENTICATED_FAILURE' |
'LOAD_USER_DATA_REQUEST' | 'LOAD_USER_DATA_SUCCESS' | 'LOAD_USER_DATA_FAILURE' |
'UPLOAD_USER_DATA_REQUEST' | 'UPLOAD_USER_DATA_SUCCESS' | 'UPLOAD_USER_DATA_FAILURE' |
'LOG_OUT_USER_REQUEST' | 'LOG_OUT_USER_SUCCESS' | 'LOG_OUT_USER_FAILURE';

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
  ActionT<'LOAD_USER_DATA_SUCCESS', User> |
  ActionT<'LOAD_USER_DATA_FAILURE', ''> |
  ActionT<'IS_AUTHENTICATED_REQUEST', ''> |
  ActionT<'IS_AUTHENTICATED_SUCCESS', Auth> |
  ActionT<'IS_AUTHENTICATED_FAILURE', ''>;