<?php

//Koneksi Ke database
$servername = "localhost";
$username = "root";
$password = "";
$database = "belajar";
$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// Load Data
$results = mysqli_query($conn, "SELECT * FROM telepon");

// Create & Update Data
if (isset($_POST['submit'])) {
  $id = $_POST['id'];
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  if (empty($id)) {
    // Create Data
    mysqli_query($conn, "INSERT INTO telepon(nama, nomor)VALUES('$name','$phone')");
  }else {
    // Update Data
    mysqli_query($conn, "UPDATE telepon SET nama='$name', nomor='$phone' WHERE id=$id");
  }
  header('Location: index.php');
}

// Load Data yang akan di edit
if (isset($_GET['edit'])) {
  $id = $_GET['edit'];
  $result = mysqli_query($conn, "SELECT * FROM telepon WHERE id=$id");
  while($data = mysqli_fetch_array($result))
  {
      $id = $data['id'];
      $name = $data['nama'];
      $phone = $data['nomor'];
  }
}else {
  $id = '';
  $name = '';
  $phone = '';
}

// Delete Data
if (isset($_GET['delete'])) {
  $id = $_GET['delete'];
  mysqli_query($conn, "DELETE FROM telepon WHERE id=$id");
  header('Location: index.php');
}
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>CRUD PHP Native</title>
  </head>
  <body>
    <div class="container-fluid">
      <h1 class="text-center">CRUD With PHP Native</h1>
      <br>
      <div class="row">
        <div class="col-sm-5">
          <div class="card">
            <div class="card-header">
              Form Tambah Data
            </div>
            <div class="card-body">
              <form action="#" method="post">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" name="name" value="<?=$name?>" class="form-control" placeholder="Enter Your Name">
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input type="text" name="phone" value="<?=$phone?>" class="form-control" placeholder="Enter Your Phone">
                  <input type="hidden" name="id" value="<?=$id?>">
                </div>
                <div class="form-group">
                  <input type="submit" name="submit" value="Submit" class="btn btn-primary">
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-sm-7">
          <h3>Data Telepon</h3>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <?php
              $no = 1;
              while($data = mysqli_fetch_array($results)) {
                $id = $data['id'];
              ?>
                <tr>
                  <th><?=$no++?></th>
                  <td><?=$data['nama']?></td>
                  <td><?=$data['nomor']?></td>
                  <td>
                    <a href="?edit=<?=$id?>" class="btn btn-info btn-sm">Edit</a>
                    <a href="?delete=<?=$id?>" class="btn btn-danger btn-sm">Delete</a>
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
