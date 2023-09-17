<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Test;

class TestController extends Controller
{
    public function index()
    {
        $test = Test::all(); // Replace 'Item' with your model name
        return response()->json($test);
    }
}
