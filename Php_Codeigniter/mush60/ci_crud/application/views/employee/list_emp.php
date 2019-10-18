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
                    <a href="<?= base_url()?>employee/create" class="btn btn-primary"> Add New Data</a>
                </div>
                <div class="col-md-12">
                    <table id="example" class="table table-striped table-bordered" style="width:100%">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Address</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>More</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php
                        foreach($emp_data as $emp){
                        ?>
                            <tr>
                                <td><?= $emp->emp_name?></td>
                                <td><?= $emp->emp_job?></td>
                                <td><?= $emp->emp_address?></td>
                                <td><?= $emp->emp_contact?></td>
                                <td><?= $emp->emp_email?></td>
                                <td>
                                    <a class="btn btn-primary btn-sm" href="<?= base_url()?>employee/show/<?= $emp->id?>">Detail</a>
                                    <a class="btn btn-success btn-sm" href="<?= base_url()?>employee/edit/<?= $emp->id?>">Edit</a>
                                    <a class="btn btn-danger btn-sm" href="<?= base_url()?>employee/delete/<?= $emp->id?>">Delete</a>
                                </td>
                            </tr>

                        <?php
                        }
                        ?>
                        </tbody>
                    </table>
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







