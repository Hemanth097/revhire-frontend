export class LoginCredentials {

    constructor(
        public email: String,
        public password: String,

    ){
        this.email=email|| "hemanth@gmail.com";
        this.password=password || "Hemanth@";

    }
}
