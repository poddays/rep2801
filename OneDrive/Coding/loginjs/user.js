
class User{
    #id
    #name
    #username
    #email
    #password = "password"
    
        constructor(id,name,username,email){
            this.#id = id;
            this.#name = name;
            this.#username = username;
            this.#email = email;
        }
        get id() {return this.#id;}
        get name() {return this.#name;}
        get username() {return this.#username;}    
        get email() {return this.#email;}
            
        set id(newId){
            this.#id = newId;
        }
        set name(newName){
            this.#id = newName;
        }
        set username(newUser){
            this.#username = newUser;
        }
        set email(newEmail){
            this.#email = newEmail;
        }
    }
    
    