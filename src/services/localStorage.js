export function clearAuthenticatedUser() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("expirationDateTime");
}

export function saveAuthenticatedUser(authData) {
    window.localStorage.setItem("token", authData.token);
    window.localStorage.setItem("userId", authData.userId);
    window.localStorage.setItem("expirationDateTime", authData.expirationDateTime);
}

export function isUserAuthenticated() {
    let userId = window.localStorage.getItem('userId')
    let token = window.localStorage.getItem('token')
    return userId && token;
}