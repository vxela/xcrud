<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Person extends CI_Controller {

    function __construct()
  	{
  		parent::__construct();
  		$this->load->model('person_m');
  	}

    public function index()
    {
        $data['row'] = $this->person_m->get();
        $this->load->view('person', $data);
    }

    public function add()
  	{
  		$person = new stdClass();
      $person->id = null;
      $person->name = null;
  		$person->address = null;
  		$person->phone = null;
  		$data = array(
  			'page' => 'add',
  			'title' => 'Tambah',
  			'button' => 'Save',
  			'row' => $person
  		);
      $this->load->view('person_form', $data);
  	}

  	public function edit($id)
  	{
  		$query = $this->person_m->get($id);
  		if ($query->num_rows() > 0) {
  			$person = $query->row();
  			$data = array(
  				'page' => 'edit',
  				'title' => 'Ubah',
  				'button' => 'Update',
  				'row' => $person,
  			);
        $this->load->view('person_form', $data);
  		}else {
  			echo "<script>alert('Data tidak dapat ditemukan');
  			window.location='".site_url('person')."';</script>";
  		}
  	}

  	public function process()
  	{
  		$post = $this->input->post(null, TRUE);
  		if (isset($_POST['add'])) {
  			$this->person_m->add($post);
  		}elseif (isset($_POST['edit'])) {
  			$this->person_m->edit($post);
  		}
  		redirect('person');
  	}

  	public function del($id)
  	{
  		$this->person_m->del($id);
  		redirect('person');
  	}
}

/* End of file Employee.php */
