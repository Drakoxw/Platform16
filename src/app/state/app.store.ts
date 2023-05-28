import { InitialStateItems } from "@interfaces/models"; 
import { ActionReducerMap } from "@ngrx/store";
import { ItemsReducer } from "./reducers/items.reducer";

export interface AppState {
    items: InitialStateItems,
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    items: ItemsReducer
}