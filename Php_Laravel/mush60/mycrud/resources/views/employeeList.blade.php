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
                <div class="row">
                    <div class="col-sm-12 mb-2">
                        @if (session('status'))
                            <div class="alert alert-success">
                                {{ session('status') }}
                            </div>
                        @endif
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mb-2">
                        <a href="/employee/create" class="btn btn-primary"> Add New Data</a>
                    </div>
                    <div class="col-md-12">
                        <table id="example" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Position</th>
                                    <th>Type</th>
                                    <th>More</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($emp_data as $emp)
                                    <tr>
                                        <td>{{$emp->employee_name}}</td>
                                        <td>{{$emp->employee_job}}</td>
                                        <td>{{$emp->employee_position}}</td>
                                        <td>{{$emp->employee_type}}</td>
                                        <td>
                                            <a class="btn btn-primary btn-sm" href="/employee/show/{{$emp->id}}">Detail</a>
                                            <a class="btn btn-success btn-sm" href="/employee/edit/{{$emp->id}}">Edit</a>
                                            <a class="btn btn-danger btn-sm" href="/employee/delete/{{$emp->id}}">Delete</a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
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
