import {personal, PersonalActionType, PersonalActionInterface} from './types';

export function addTimeline(personal: personal) : PersonalActionInterface {
  return {
    type: PersonalActionType.ADD_TIMELINE,
    payload: personal
  }
}

export function deleteTimeline(index: number):  PersonalActionInterface {
  return {
    type: PersonalActionType.DELETE_TIMELINE,
    payload: index
  }
} 