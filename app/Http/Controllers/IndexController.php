<?php

namespace App\Http\Controllers;

use App\Models\Office;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    /**
     * @param Request $request
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function index(Request $request): \Inertia\Response|\Inertia\ResponseFactory
    {
        $offices = Office::orderByDesc('id')->limit(8)->get();
        return inertia('Index', ['entries' => $offices]);
    }
}
