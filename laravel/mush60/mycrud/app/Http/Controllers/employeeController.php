<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class employeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $emp_data = \App\Employee::all();
        return view('employeeList', ['emp_data' => $emp_data ]);
    }

    public function create()
    {
        return view('employeeCreate');
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        $emp_data = \App\Employee::find($id);
        return view('employeeDetail', ['emp_data' => $emp_data]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $emp_data = \App\Employee::find($id);
        return view('employeeEdit', ['emp_data' => $emp_data]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    public function delete()
    {
        //
        return view('employeeDelete');
    }    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
