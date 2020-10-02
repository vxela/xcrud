<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Employee;

class employeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $emp_data = Employee::all();
        return view('employeeList', compact('emp_data'));
    }

    public function create()
    {
        return view('employeeCreate');
    }

    public function store(Request $request)
    {

        $data = $request->all();
        Employee::create($data);

        return redirect('/employee')->with('status', 'Success add data');
    }

    public function show($id)
    {
        $emp_data = Employee::findOrFail($id);
        return view('employeeDetail', compact('emp_data'));
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
        $emp_data = Employee::findOrFail($id);
        return view('employeeEdit', compact('emp_data'));
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
        $data = $request->all();
        $item = Employee::findOrFail($id);
        $item->update($data);

        return redirect()->back()->with('status', 'Success edit data');
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
        $emp_data = Employee::find($id);
        //
        $emp_data->forceDelete();
        return redirect('/employee')->with('status', 'Success Delete data');
    }
}
