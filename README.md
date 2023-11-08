## 1.0 Setting up Repository.
<hr>

### 1.1 Cloning and Package Installation

In order to setup the repository please follow the steps provided below. The prerequisites are as follows:
1. node
2. npm or yarn installed.
3. mysql service needs to be installed in case of linux machine else xampp mysql should be up and running.

The command sequence is present here:
```shell
$ git clone git@github.com:SahilLodha/everestwalk-server.git everestwalk
$ cd everestwalk
$ npm install
```
### 1.2 Setting up mysql environment
The values between **_<>_** are to be replaced as per requirement.

```mysql
> mysql -u <root username> -p
# Enter you password after this
> CREATE database <db_name>
> CREATE USER <username>@'localhost' IDENTIFIED BY '<password>>';
> GRANT ALL ON <db_name>.* TO '<username>'@'localhost';
```

### 1.3 Setting up the environmental variable

Remain inside the everestwalk as root directory ..
```shell
$ cp ./env.example ./env
```
The variables will need to be populated as:
> **DB_NAME**= <db_name>  
> **DB_USER_NAME**= <username>  
> **DB_PASSWORD**= <password>  
> **DB_DIALECT**= _mysql|postgres_ (*as per used database).

Fill te env values for which you will need to create a mysql user and grant it proper access to the database. Also set the ```SALT_VALUE```  in the .env to an int value greater  than 1 and the ```PORT``` which the express application can listen to.

<hr />

## Repository Detail

The app folder contains the various versions of the API created. Currently running ```v1``` and under the version directory all the major logic has been divided. I have used the ES6 import style during the develpement of the project.

### END POINTS defined 
> User Create:
> End Point: locahost:${PORT}/api/v1/user  
> Method: POST  
>
> User Update:  
> End Point: locahost:${PORT}/api/v1/user/${:id}  
> Method: PUT   
>
> User Delete:  
> End Point: locahost:${PORT}/api/v1/user/${:id}  
> Method: DELETE  
>
> User Fetch (All):  
> End Point: locahost:${PORT}/api/v1/user/${:id}  
> Method: GET  
>
> User Fetch (One):  
> End Point: locahost:${PORT}/api/v1/user/  
> Method: GET  

Please look into the application accordingly.

<hr />

# Additional Features:
- Express validation has been added in order to have proper request validation.