import { User, UserObject } from "../Models/UserModel";

export class AppState {
  // Step 1 - create the app state object
  public user: User = {
    details: {
      id:0, emailAddress:"", customerName:"", _links:{self:"",tickets:""}
    },
    token: ""}

};


// Step 2 - define all required actions
export enum ActionType {
  GOT_USER_TOKEN = "GOT_USER_TOKEN",
  GOT_USER_DETAILS = "GOT_USER_DETAILS",
}

// Step 3 - define what is action in terms of data
export interface UserAction {
  type: ActionType;
  payload: any;
}

// Step 4 - creator functions - gets payload regarding the action
export function gotUserToken(res: String): UserAction {
  return { type: ActionType.GOT_USER_TOKEN, payload: res };
}
export function gotUserDetails(res: UserObject): UserAction {
  return { type: ActionType.GOT_USER_DETAILS, payload: res };
}



// Step 5 - Reducer function perform the required action
export function userReducer(
  currentState: AppState = new AppState(),
  action: UserAction
): AppState {
  const newState = { ...currentState }; //Spread Operator // Copy
  switch (action.type) {
    case ActionType.GOT_USER_TOKEN: {
      newState.user.token = action.payload;
      break;
    }
    case ActionType.GOT_USER_DETAILS: {
      newState.user.details = action.payload;
      break;
    }

    /*
    case ActionType.ADDED_TASK: {
      newState.tasks.push(action.payload);
      break;
    }
    case ActionType.UPDATED_TASK: {
      console.log(newState.tasks);
      const idx = newState.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      newState.tasks[idx] = action.payload;
      console.log(newState.tasks);
      break;
    }

    case ActionType.DELETED_TASK: {
      newState.tasks = newState.tasks.filter(
        (task) => task.id !== action.payload
      );
    }*/
  }
  return newState;
}
