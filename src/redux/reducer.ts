import { combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import formData from "./slices/formData"

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: [],
}
const formPersistConfig = {
  key: "form",
  storage: storage,
}

const rootReducer = combineReducers({
  formReducer: persistReducer(formPersistConfig, formData),
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default persistedReducer
