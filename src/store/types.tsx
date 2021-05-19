export interface personal {
  sex: string,
  age: number,
  job: string,
  timeline: object; 
}

export enum PersonalActionType {
  ADD_PROFILE = "ADD_PROFILE",
  ADD_TIMELINE = "ADD_TIMELINE",
  DELETE_TIMELINE = "DELETE_TIMELINE"
}

export type PersonalAction = PersonalActionType;

export interface PersonalActionInterface  {
  type: PersonalAction;
  payload: any;
}