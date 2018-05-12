export function clearAuthenticatedUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationDateTime");
}

export function saveAuthenticatedUser(authData) {
    localStorage.setItem("token", authData.token);
    localStorage.setItem("userId", authData.userId);
    localStorage.setItem("expirationDateTime", authData.expirationDateTime);
}

export function isUserAuthenticated() {
    let userId = localstorage.getItem('userId')
    let token = localstorage.getItem('token')
    return userId && token;
}