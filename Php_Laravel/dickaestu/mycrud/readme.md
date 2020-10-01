# mycrud

**Simple CRUD app create using laravel 6.1, boostrap 4**

This crud create to help you learn laravel php framework

#### What u need to run this app

1. All Laravel 6.0 reqruitment

        PHP >= 7.2.0

        BCMath PHP Extension

        Ctype PHP Extension

        JSON PHP Extension

        Mbstring PHP Extension

        OpenSSL PHP Extension

        PDO PHP Extension

        Tokenizer PHP Extension

        XML PHP Extension


2. Of course composer installed on your machine
3. Empty database
4. Internet connection

### How to run this app?

1. clone this repo from github

        git clone https://github.com/mush60/xcrud.git
2. go to the repo directory, Php_laravel, mush60, mycrud
                
        your/dir/xcrud/Php_laravel/mush60/mycrud/
        
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
        
7. run the seeder to fill the database (optional)

        php artisan db:seed --class=EmployeesTableSeeder
8. run server

		php artisan serve
        
9. Open 127.0.0.1:8000 at browser. done

10. Start learn n Enjoy...

credit :
			
    https://laravel.com/docs/6.x
    https://github.com/
    https://github.com/mush60
    https://hacktoberfest.digitalocean.com/
    


- [mush60, Instagram](https://www.instagram.com/mush_60/).

 
    
  ##### **Thanks**
  




  
  <hr>
    