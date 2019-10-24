<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>CRUD CodeIgniter</title>
  </head>
  <body>
    <div class="container-fluid">
      <h1 class="text-center">CRUD CodeIgniter</h1>
      <br>
      <div class="row">
        <div class="col-sm-7">
          <a href="<?=site_url('person/add')?>" class="btn btn-primary">Tambah Data</a>
          <br><br>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <?php
              $no=1;
              foreach ($row->result() as $key => $data) {
              ?>
                <tr>
                  <th><?=$no++?></th>
                  <td><?=$data->name?></td>
                  <td><?=$data->address?></td>
                  <td><?=$data->phone?></td>
                  <td>
                    <a href="<?=site_url('person/edit/'.$data->id)?>" class="btn btn-info btn-sm">Edit</a>
                    <a href="<?=site_url('person/del/'.$data->id)?>" class="btn btn-danger btn-sm">Delete</a>
                  </td>
                </tr>
              <?php } ?>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </body>
</html>
