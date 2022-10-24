module.exports = function (username, password) {
    if (
        !username ||
        !password ||
        username.trim() === 0 ||
        password.trim() === 0
    ) {
        return { error: "Credentials are mandatory" };
    }

    if (username.length < 4) {
        return { error: "Username should be at least 4 characters." };
    }

    if (username.length > 100) {
        return { error: "Username is too long." };
    }

    if (password.length < 4) {
        return { error: "Password should be at least 4 characters." };
    }

    if (password.length > 100) {
        return { error: "Password is too long." };
    }

    return `Credentials are valid`;
};
