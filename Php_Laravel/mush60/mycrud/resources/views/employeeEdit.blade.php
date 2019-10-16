<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel | XCRUD</title>

    <!-- Bootstrap core CSS -->
        <link href="{{asset('dist/css/bootstrap.min.css')}}" rel="stylesheet">

        <!-- Custom styles for this template -->
        <link href="{{asset('dist/css/starter-template.css')}}" rel="stylesheet">
        <link href="{{asset('dist/css/dataTables.bootstrap4.min.css')}}" rel="stylesheet">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
        </style>
    </head>
    <body>
        <main role="main" class="container">
            <div class="starter-template">
                <div class="col-md-12">
                    <div class="row mb-2">
                        <div class="col-md-12">
                            <h2>Edit Employee</h2>
                        </div>
                    </div>
                    <form action="/employee/update/{{$emp_data->id}}" method="post">
                        <div class="row mb-2">
                            <div class="col-md-3">
                                Employee Name
                            </div>
                            <div class="col-md-4">
                                @csrf
                                <input class="form-control" type="text" name="emp_name" value="{{$emp_data->employee_name}}">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-3">
                                Job
                            </div>
                            <div class="col-md-4">
                                <input class="form-control" type="text" name="emp_job" value="{{$emp_data->employee_job}}">
                            </div>
                        </div>
                        <div class="row mb-2">                            
                            <div class="col-md-3">
                                Position
                            </div>
                            <div class="col-md-4">
                                <input class="form-control" type="text" name="emp_position" value="{{$emp_data->employee_position}}">
                            </div>
                        </div>
                        <div class="row mb-2">                            
                            <div class="col-md-3">
                                Sex
                            </div>
                            <div class="col-md-4">
                                <input class="form-control" type="text" name="emp_sex" value="{{$emp_data->employee_sex}}">
                            </div>
                        </div>
                        <div class="row mb-2">                            
                            <div class="col-md-3">
                                Email
                            </div>
                            <div class="col-md-4">
                                <input class="form-control" type="email" name="emp_email" value="{{$emp_data->employee_email}}">
                            </div>
                        </div>
                        <div class="row mb-2">                            
                            <div class="col-md-3">
                                Phone Number
                            </div>
                            <div class="col-md-4">
                                <input class="form-control" type="text" name="emp_phone" value="{{$emp_data->employee_phone}}">
                            </div>
                        </div>
                        <div class="row mb-2">                            
                            <div class="col-md-3">
                                Address
                            </div>
                            <div class="col-md-4">
                                <input class="form-control" type="text" name="emp_address" value="{{$emp_data->employee_address}}">
                            </div>
                        </div>
                        <div class="row mb-2">                            
                            <div class="col-md-3">
                                Employee Type
                            </div>
                            <div class="col-md-4">
                                <input class="form-control" type="text" name="emp_type" value="{{$emp_data->employee_type}}">
                            </div>
                        </div>
                        <div class="row mb-2">                            
                            <div class="col-md-3">
                                Start Working at
                            </div>
                            <div class="col-md-4">
                                <input class="form-control" type="date" name="emp_start_date" value="{{$emp_data->employee_date_start}}">
                            </div>
                        </div>
                        <div class="row mb-2">                            
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-primary btn-sm">Update</button>
                            </div>
                        </div>                    
                    </form>
                </div>
            </div>
        </main>
        <script src="{{asset('dist/js/jquery-3.3.1.js')}}"></script>
        <script src="{{asset('dist/js/jquery-slim.min.js')}}"></script>
        <script src="{{asset('dist/js/popper.min.js')}}"></script>
        <script src="{{asset('dist/js/bootstrap.min.js')}}"></script>
        <script src="{{asset('dist/js/datatables.min.js')}}"></script>
        <script src="{{asset('dist/js/dataTables.bootstrap4.min.js')}}"></script>
        <script src="{{asset('dist/js/myjs.js')}}"></script>
    </body>
</html>
