export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectTheme = state => state.auth.user.theme;
export const selectIsRefreshing = state => state.auth.isRefreshing;
