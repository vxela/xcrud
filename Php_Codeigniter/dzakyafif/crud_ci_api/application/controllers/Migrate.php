<?php


class Migrate extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        if ($this->migration->latest()) {
            echo "Migration Success";
        } else {
            echo $this->migration->error_string();
        }
    }

}