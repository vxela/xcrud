<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class EmployeesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('employees')->insert([
            'employee_name' => 'John Doe',
            'employee_job' => 'Programmer',
            'employee_position' => 'Crew',
            'employee_sex' => 'L',
            'employee_email' => 'jdoe@mail.com',
            'employee_phone' => '081231212422',
            'employee_address' => 'St. Nowhere, IDK',
            'employee_type' => 'Contract',
            'employee_date_start' => '2018-07-01',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('employees')->insert([
            'employee_name' => 'Jene Doe',
            'employee_job' => 'Designer',
            'employee_position' => 'Crew',
            'employee_sex' => 'P',
            'employee_email' => 'jndoe@mail.com',
            'employee_phone' => '081222412531',
            'employee_address' => 'St. Another Place, IDK',
            'employee_type' => 'Permanent',
            'employee_date_start' => '2016-10-21',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('employees')->insert([
            'employee_name' => 'Albert Cole',
            'employee_job' => 'Analyst',
            'employee_position' => 'Crew',
            'employee_sex' => 'L',
            'employee_email' => 'Acole@mail.com',
            'employee_phone' => '081222412531',
            'employee_address' => 'St. Dream Place, IDK',
            'employee_type' => 'Contract',
            'employee_date_start' => '2016-10-21',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('employees')->insert([
            'employee_name' => 'Mush Walker',
            'employee_job' => 'Direktur',
            'employee_position' => 'CEO',
            'employee_sex' => 'L',
            'employee_email' => 'mwalker@mail.com',
            'employee_phone' => '081222412531',
            'employee_address' => 'St. Good Place, IDK',
            'employee_type' => 'Permanent',
            'employee_date_start' => '2016-10-21',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);

        DB::table('employees')->insert([
            'employee_name' => 'Andrew Cooper',
            'employee_job' => 'System Architect',
            'employee_position' => 'Head',
            'employee_sex' => 'L',
            'employee_email' => 'acooper@mail.com',
            'employee_phone' => '084522674361',
            'employee_address' => 'St. Riverdale, IDK',
            'employee_type' => 'Permanent',
            'employee_date_start' => '2016-10-21',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }
}
