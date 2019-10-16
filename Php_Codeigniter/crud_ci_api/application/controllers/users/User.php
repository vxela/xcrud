<?php

require APPPATH . '/libraries/REST_Controller.php';


class User extends REST_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('User_model');
    }

    public function create_post()
    {
        $data = [
            'fullname' => $this->post('name')
        ];

        $user = $this->User_model->create($data);

        $response = [
            'status' => 'success',
            'code' => REST_Controller::HTTP_CREATED,
            'data' => $user
        ];

        $this->set_response($response, REST_Controller::HTTP_CREATED);
    }

    public function list_get()
    {
        $user = $this->User_model->listData();
        if($user == false)
        {
            $this->set_response([
                'status' => 'error',
                'code' => REST_Controller::HTTP_BAD_REQUEST,
                'message' => 'No users found'
            ],REST_Controller::HTTP_BAD_REQUEST);
        }else{
            $this->set_response([
                'status' => 'success',
                'code' => 200,
                'data' => $user
            ],REST_Controller::HTTP_CREATED);
        }
    }

    public function update_post()
    {
        $id = (int) $this->uri->segment(3);

        $data = [
            'fullname' => $this->post('name')
        ];

        $user = $this->User_model->updateData($id,$data);
        if($user == false)
        {
            $this->set_response([
                'status' => 'error',
                'code' => REST_Controller::HTTP_BAD_REQUEST,
                'message' => 'No users found'
            ],REST_Controller::HTTP_BAD_REQUEST);
        }else{
            $this->set_response([
                'status' => 'success',
                'code' => REST_Controller::HTTP_CREATED,
                'data' => $user
            ],REST_Controller::HTTP_CREATED);
        }
    }

    public function userdelete_delete()
    {
        $id = $this->uri->segment(3);

        $user = $this->User_model->deleteData($id);

        if($user == false)
        {
            $this->set_response([
                'status' => 'error',
                'code' => REST_Controller::HTTP_BAD_REQUEST,
                'message' => 'No users found'
            ],REST_Controller::HTTP_BAD_REQUEST);
        }else{
            $this->set_response([
                'status' => 'success',
                'code' => REST_Controller::HTTP_CREATED,
                'message' => 'data has been deleted'
            ],REST_Controller::HTTP_CREATED);
        }
    }

}