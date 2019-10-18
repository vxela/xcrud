<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="<?= base_url('dist/')?>css/bootstrap.min.css">
    <link rel="stylesheet" href="<?= base_url('dist/')?>css/starter-template.css">
    <link rel="stylesheet" href="<?= base_url('dist/')?>css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>CodeIgniter | CRUD</title>
</head>
<body>

    <main role="main" class="container">
        <div class="starter-template">
            <div class="row">
                <div class="col-sm-12 mb-2">
                        <!-- <div class="alert alert-success">
                        </div> -->
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 mb-2">
                    <h3>Tambah Data</h3>
                </div>
                <div class="col-md-12">
                    <form action="<?= base_url()."employee/update/".$emp_data->id?>" method="post">
                        <div class="row mb-2">
                            <div class="col-md-2">
                                Full Name
                            </div>
                            <div class="col-md-4">
                                <input type="text" name="emp_name" class="form-control" placeholder="Full Name" value="<?= $emp_data->emp_name?>">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-2">
                                Job
                            </div>
                            <div class="col-md-4">
                                <input type="text" name="emp_job" class="form-control" placeholder="Employee Job" value="<?= $emp_data->emp_job?>">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-2">
                                Address
                            </div>
                            <div class="col-md-4">
                                <input type="text" name="emp_address" class="form-control" placeholder="Employee Address" value="<?= $emp_data->emp_address?>">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-2">
                                Contact
                            </div>
                            <div class="col-md-4">
                                <input type="number" name="emp_contact" class="form-control" placeholder="Employee Contact" value="<?= $emp_data->emp_contact?>">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-2">
                                Email
                            </div>
                            <div class="col-md-4">
                                <input type="email" name="emp_email" class="form-control" placeholder="Employee Email" value="<?= $emp_data->emp_email?>">
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-2">

                            </div>
                            <div class="col-md-4">
                                <button type="submit" class="btn btn-primary">Update</button>
                                <a href="#" class="btn btn-secondary">Cancel</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->


    <script src="<?= base_url('dist/')?>js/jquery-3.3.1.js"> </script>
    <script src="<?= base_url('dist/')?>js/jquery-slim.min.js"> </script>
    <script src="<?= base_url('dist/')?>js/popper.min.js"> </script>
    <script src="<?= base_url('dist/')?>js/bootstrap.min.js"> </script>
    <script src="<?= base_url('dist/')?>js/datatables.min.js"> </script>
    <script src="<?= base_url('dist/')?>js/dataTables.bootstrap4.min.js"> </script>
    <script src="<?= base_url('dist/')?>js/myjs.js"> </script>

  </body>
</html>