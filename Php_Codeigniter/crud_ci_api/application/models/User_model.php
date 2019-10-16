<?php


class User_model extends CI_Model
{

    public function create($data)
    {
        $this->db->insert('users',$data);

        $user_insert_id = $this->db->insert_id();
        $user = $this->db->get_where('users',['id' => $user_insert_id])->row();

        return $user;
    }

    public function listData()
    {
        $this->db->select('*');
        $this->db->from('users');
        $query = $this->db->get();
        if($query->num_rows > 0) {
            return $query->result();
        }else{
            return FALSE;
        }
    }

    public function updateData($id,$data)
    {


        $query = $this->db->get_where('users',['id' => $id])->result();
        if(count($query) > 0)
        {
            $this->db->set($data);
            $this->db->where('id',$id);
            $this->db->update('users');

            return $this->db->get_where('users',['id' => $id])->result();
        }else{
            return FALSE;
        }
    }

    public function deleteData($id)
    {
        $query = $this->db->get_where('users',['id' => $id])->result();
        if(count($query) > 0) {
            $this->db->where('id',$id);
            $this->db->delete('users');
            return TRUE;
        }else{
            return FALSE;
        }

    }

}