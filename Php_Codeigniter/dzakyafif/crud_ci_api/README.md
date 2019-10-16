# mycrud

**Simple CRUD api Codeigniter 3**

This crud create to help you learn laravel php framework

#### What u need to run this app

2. Of course composer installed on your machine
3. Empty database
4. Internet connection

### How to run this app?

1. clone this repo from github

        git clone https://github.com/{username}/xcrud.git
2. go to the repo directory, example: Php_Codeigniter, dzaki, mycrud
                
        your/dir/xcrud/Php_laravel/mush60/crud_ci_api/
        
3. copy config.php.dist to config.php

4. copy database.php.dist to database.php
        
5. install the package used using composer
            
        composer install
        
6. config your database in config/database.php
        
7. install third party libraries
        
        php bin/install.php restserver 2.7.2
        php vendor/kenjis/codeigniter-cli/install.php
        
8. run server

		php -S localhost:1234 -t public/         
        
9. do migrate the database to create table to url /migrate               
                
10. Open localhost:1234 at browser. done

11. Start learn n Enjoy...


#### LIST API

    /user/create (for create new user)
    /user/list (for list user)
    /user/update/{id} (for update user by id)
    /user/delete/{id} (for delete user by id)

 
    
  ##### **Thanks**
  




  
  <hr>
    