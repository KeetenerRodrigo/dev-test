# Finance Api - Quick start guide

### Which is
It is an app requested as a test to enter the company 4cadia.

### TO WHOM IT IS INTENDED / OBJECTIVE
The goal of the project is to create an app that performs user registration, login and shows the user's statement and balances. At first we create the entire login register that inserts in the postgres database with a unique id and then with static values ​​in the financial report create the front end of the application. 

### LOCAL INSTALLATION
• Install the docker, postgres and git;
• On your local server download the project using `git clone`.
• With the project open, type in the `yarn install` terminal to install the libraries;
• Run this command on your terminal `docker run --name finance_postgress -e POSTGRES_PASSWORD=docker -p 5434:5432 -d postgres`, this command starts the database container;
• Now, for it to run correctly, enter the backend folder via the terminal and type `yarn dev: server`, after that enter
in the frontend folder and type `yarn start`

### PROJECT LIBRARIES
* We use [Typescript] (https://www.typescriptlang.org/) with node on the backend and react frontend, as we consider it a current and easy-to-use tool that is constantly growing, in addition to showing us a strongly "typed" language that makes life a lot easier.

* MySql database and the manager is [PostgreSQL] (https://www.postgresql.org/). PostgreSQL is one of the most used managers, as it is super simple and scalable.

* For the management of object relationships with the database, the [Typeorm] (https://typeorm.io/) was used, we believe that the typeorm is better in production because it has two functions that the other ORM'S do not have Active Record and Data Mapper in addition to being easy to use.

* For code standardization and perfumery ESLint, Prettier and Editor Config were used. That in teams generates a certain standardization in the codes as declarations of variables and even the annoying problem with ";".

### WOULD LIKE TO BE EVALUATED BY
For the quality of the writing and the architecture of the software.
----------------------------
#### IF YOU GOT HERE
Thank you very much for the opportunity, may God bless you a lot and I hope to be part of the team and grow a lot with the company.

#### ABOUT THE AUTHOR / ORGANIZER
Keetener Rodrigo Machado Costa
keetenermachado99@gmail.com