<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Employee extends CI_Controller {

    public function index()
    {
        $this->load->model('M_employee');
        $data['emp_data'] = $this->M_employee->getAll();

        // print_r($data);

        $this->load->view('employee/list_emp', $data);
    }

    public function show($id) {
        $this->load->model('M_employee');
        $data['emp_data'] = $this->M_employee->getById($id);

        // print_r($data['emp_data']);

        $this->load->view('employee/show_emp', $data);
    }

}

/* End of file Employee.php */
