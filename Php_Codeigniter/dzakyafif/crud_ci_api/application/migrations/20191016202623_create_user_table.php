<?php
/**
 * Migration: create_user_table
 *
 * Created by: Cli for CodeIgniter <https://github.com/kenjis/codeigniter-cli>
 * Created on: 2019/10/16 20:26:23
 */
class Migration_create_user_table extends CI_Migration {

	public function up()
	{
	    $this->dbforge->add_field(array(
	        'id' => array(
	            'type' => 'INT',
                'constraint' => 11,
                'auto_increment' => TRUE
            ),
            'fullname' => array(
                'type' => 'VARCHAR',
                'constraint' => '100'
            )
         ));
	    $this->dbforge->add_key('id',true);
	    $this->dbforge->create_table('users');
//		// Creating a table
//		$this->dbforge->add_field(array(
//			'blog_id' => array(
//				'type' => 'INT',
//				'constraint' => 11,
//				'auto_increment' => TRUE
//			),
//			'blog_title' => array(
//				'type' => 'VARCHAR',
//				'constraint' => 100,
//			),
//			'blog_author' => array(
//				'type' =>'VARCHAR',
//				'constraint' => '100',
//				'default' => 'King of Town',
//			),
//			'blog_description' => array(
//				'type' => 'TEXT',
//				'null' => TRUE,
//			),
//		));
//		$this->dbforge->add_key('blog_id', TRUE);
//		$this->dbforge->create_table('blog');

//		// Adding a Column to a Table
//		$fields = array(
//			'preferences' => array('type' => 'TEXT')
//		);
//		$this->dbforge->add_column('table_name', $fields);
	}

	public function down()
	{
//		// Dropping a table
		$this->dbforge->drop_table('users');

//		// Dropping a Column From a Table
//		$this->dbforge->drop_column('table_name', 'column_to_drop');
	}

}
