# mycrud

**Simple CRUD API Laravel 5.6**

This crud create to help you learn laravel php framework

#### What u need to run this api

1. Of course composer installed on your machine
2. Empty database
3. Internet connection

### How to run this api?

1. clone this repo from github after fork

        git clone https://github.com/{username}/xcrud.git
        
2. go to the repo directory, example: Php_laravel, dzaki, mycrud
                
        your/dir/xcrud/Php_laravel/dzaki/crud/
        
3. copy .env.example and rename become .env, change with your db configuration

        DB_CONNECTION=mysql
        DB_HOST=localhost
        DB_PORT=3306
        DB_DATABASE=your_database
        DB_USERNAME=your_db_user
        DB_PASSWORD=your_db_password
        
4. install the package used using composer
            
        composer install
5. generate the key
  
          php artisan key:generate
6. do migrate the database to create table

        php artisan migrate
        
7. run server

		php artisan serve
        
8. Open 127.0.0.1:8000 at browser. done

9. Start learn n Enjoy...


#### List API

    /book/create (for create book)
    /book/list  (for list book)
    /book/update/{id} (update book where id)
    /book/delete/{id} (delete book where id)
   

 
    
  ##### **Thanks**
  




  
  <hr>
    
