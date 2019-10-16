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
                    <div class="col-md-12">
                        <div class="alert alert-danger">
                            Are want to <strong>delete</strong> this data?
                        </div>
                        <a class="btn btn-danger btn-sm" href="/employee/destroy/{{$id}}">Yes, Delete</a>
                        <a class="btn btn-secondary btn-sm" href="/">No, Bring me Back</a>
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
