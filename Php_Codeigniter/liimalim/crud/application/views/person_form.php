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
        <div class="col-sm-5">
          <a href="<?=site_url('person')?>" class="btn btn-primary">Lihat Data</a>
          <br><br>
          <div class="card">
            <div class="card-header">
              Form Tambah Data
            </div>
            <div class="card-body">
              <form action="<?=site_url('person/process')?>" method="post">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" name="name" value="<?=$row->name?>" class="form-control" placeholder="Enter Your Name" required>
                </div>
                <div class="form-group">
                  <label for="address">Address</label>
                  <textarea name="address" rows="4" cols="40" class="form-control" required><?=$row->address?></textarea>
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input type="text" name="phone" value="<?=$row->phone?>" class="form-control" placeholder="Enter Your Phone" required>
                </div>
                <div class="form-group">
                  <input type="hidden" name="id" value="<?=$row->id?>">
                  <input type="submit" name="<?=$page?>" value="<?=ucfirst($button)?>" class="btn btn-sm btn-primary">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
