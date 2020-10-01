<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    //
    protected $fillable = ['employee_name', 'employee_job', 'employee_position', 'employee_sex', 'employee_email', 'employee_phone', 'employee_address', 'employee_type', 'employee_date_start', 'created_at', 'updated_at'];
}
