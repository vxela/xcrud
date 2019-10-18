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

    public function create() {

        $this->load->view('employee/create_emp');
        
    }

    public function store() {

        $data = array(
            'emp_name' => $this->input->post('emp_name'),
            'emp_job' => $this->input->post('emp_job'),
            'emp_address' => $this->input->post('emp_address'),
            'emp_contact' => $this->input->post('emp_contact'),
            'emp_email' => $this->input->post('emp_email')
        );

        $this->load->model('M_employee');

        $this->M_employee->addData($data);

        $this->session->set_flashdata('status', 'Inser data success');
        
        redirect(base_url().employee);

    }

    public function edit($id) {

        $this->load->model('M_employee');
        $data['emp_data'] = $this->M_employee->getById($id);

        $this->load->view('employee/edit_emp', $data);

    }

    public function update($id) {

        $data = array(
            'emp_name' => $this->input->post('emp_name'),
            'emp_job' => $this->input->post('emp_job'),
            'emp_address' => $this->input->post('emp_address'),
            'emp_contact' => $this->input->post('emp_contact'),
            'emp_email' => $this->input->post('emp_email')            
        );

        $this->load->model('M_employee');

        $this->M_employee->update($data, $id);

        $this->session->set_flashdata('status', 'Update data success');
        
        redirect(base_url().employee);

    }

    public function delete($id) {

        $this->load->model('M_employee');
        $data['emp_data'] = $this->M_employee->getById($id);

        $this->load->view('employee/delete_emp', $data);

    }

    public function destroy($id) {

        $this->load->model('M_employee');
        $this->M_employee->destroy($id);

        $this->session->set_flashdata('status', 'Delete data success');
        redirect(base_url().employee);

    }

}

/* End of file Employee.php */
