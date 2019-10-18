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
                    <h3>Detail Data <?= $emp_data->emp_name?></h3>
                </div>
                <div class="col-md-12">
                    <div class="row mb-2">
                        <div class="col-md-2">
                            Full Name
                        </div>
                        <div class="col-md-10">
                            <?= $emp_data->emp_name?>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2">
                            Job
                        </div>
                        <div class="col-md-10">
                            <?= $emp_data->emp_job?>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2">
                            Address
                        </div>
                        <div class="col-md-10">
                            <?= $emp_data->emp_address?>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2">
                            Contact
                        </div>
                        <div class="col-md-10">
                            <?= $emp_data->emp_contact?>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-2">
                            Email
                        </div>
                        <div class="col-md-10">
                            <?= $emp_data->emp_email?>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-12">
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                Are you sure to <strong>delete this data??..</strong>
                                <div class="mt-2">
                                    <a href="<?= base_url('employee')?>" class="btn btn-secondary">No, Bring me back!</a> 
                                    <a href="<?= base_url('employee/destroy/').$emp_data->id?>" class="btn btn-danger">Yes, i'm sure!</a> 
                                </div>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
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