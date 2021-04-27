// 1.)
try {
    function sum(x, y) {
        return 1 + 2
    }
    throw "This is it!"
}
catch (err) {
    console.log("error")
}

// 2.)*

var login = {
    Username: "NFL Fan",
    Password: "5566",
};
try {
    function user(Username, Password) {
        if(login = true){
            throw "Login Successful"
        }
    }

}

catch {
    console.log("Incorrect Login Information")
}
