import {createSelector} from "@reduxjs/toolkit";

export const userSelector = createSelector(store => store.users.user, item => item)