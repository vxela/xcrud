<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class M_employee extends CI_Model {

    private $table = 'tbl_employee';

    public function getAll(){

        return $this->db->get($this->table)->result();

    }

    public function getById($id){

        return $this->db->get_where($this->table, array('id' => $id))->row();

    }

    public function addData($data) {

        $this->db->insert($this->table, $data);

        return "success";
    }    

    public function update($data, $id) {

        $this->db->where('id', $id);
        $this->db->update($this->table, $data);

        return "success";
    }
    
    public function destroy($id) {

        $this->db->where('id', $id);
        $this->db->delete($this->table);
        
        return "success";
    }
    
}

/* End of file M_employee.php */
