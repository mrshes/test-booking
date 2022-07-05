<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * @param Request $request
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function getProfile(Request $request): \Inertia\Response|\Inertia\ResponseFactory
    {
        $user = $request->user();
        return inertia('Profile', ['user'=> $user]);
    }
}
