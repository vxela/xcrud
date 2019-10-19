# mycrud

**Simple CRUD API with Symfon**

This crud create to help you learn symfony php framework

#### What u need to run this app

2. Of course composer installed on your machine
3. Empty database
4. Internet connection

### How to run this app?

1. clone this repo from github

        git clone https://github.com/{username}/xcrud.git
2. go to the repo directory, Php_Symfony, dzaki, crud_symfony
                
        your/dir/xcrud/Php_Symfony/dzaki/crud_symfony/
        
3. change db_user, db_password, db_name in .env
        
4. install the package used using composer
            
        composer install
        
5. generate database
    
        php bin/console doctrine:database:create

6. do migrate the database to create table

        php bin/console doctrine:migrations:migrate
        
7. run server (built in php)

		php -S localhost:1234 -t public/
        
8. Open localhost:1234 at browser.

9. if you want to look list api, you can visit localhost:1234/api/

10. Start learn n Enjoy...

 
    
  ##### **Thanks**
  




  
  <hr>