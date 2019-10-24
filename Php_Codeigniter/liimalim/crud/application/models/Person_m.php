<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class person_m extends CI_Model {

  public function get($id = null)
  {
    $this->db->from('tb_person');
    if ($id != null) {
      $this->db->where('id', $id);
    }
    $query = $this->db->get();
    return $query;
  }

  public function add($post)
  {
    $params = [
      'name'        => $post['name'],
      'address'     => $post['address'],
      'phone'       => $post['phone'],
    ];
    $this->db->insert('tb_person', $params);
  }

  public function edit($post)
  {
    $params = [
      'name'        => $post['name'],
      'address'     => $post['address'],
      'phone'       => $post['phone'],
    ];
    $this->db->where('id', $post['id']);
    $this->db->update('tb_person', $params);
  }

  public function del($id)
  {
    $this->db->where('id', $id);
    $this->db->delete('tb_person');
  }
}
