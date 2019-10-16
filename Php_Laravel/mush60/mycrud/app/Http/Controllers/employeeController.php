<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;

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
        $emp_data = \App\Employee::find($id);

        $emp_data->employee_name = $request->emp_name;
        $emp_data->employee_job = $request->emp_job;
        $emp_data->employee_position = $request->emp_position;
        $emp_data->employee_sex = $request->emp_sex;
        $emp_data->employee_email = $request->emp_email;
        $emp_data->employee_phone = $request->emp_phone;
        $emp_data->employee_address = $request->emp_address;
        $emp_data->employee_type = $request->emp_type;
        $emp_data->employee_date_start = $request->emp_start_date;
        $emp_data->updated_at = Carbon::now()->format('Y-m-d H:i:s');

        $emp_data->save();

        return redirect()->back();
            // dd($request->all());
    }

    public function delete($id)
    {
        
        return view('employeeDelete', ['id' => $id]);
    }    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $emp_data = \App\Employee::find($id);
        //
        $emp_data->forceDelete();
        return redirect('/employee');
        
    }
}
