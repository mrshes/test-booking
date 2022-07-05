<?php

namespace App\Http\Controllers;

use App\Http\Requests\OfficeRequest;
use App\Models\Office;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class OfficeController extends Controller
{

    /**
     * @param Request $request
     * @return \Inertia\Response
     */
    public function index(OfficeRequest $request): \Inertia\Response
    {
        $data = $request->validated();
        $entries = Office::fetch($data)->paginate(12);
        return Inertia::render('Office', [
            'entries' => $entries
        ]);
    }

    /**
     * @param Request $request
     * @param int $id
     * @return \Inertia\Response
     */
    public function show(Request $request, Office $office): \Inertia\Response
    {
        return Inertia::render('OfficeShow', [
            'entry' => $office->load('attributes.attribute')
        ]);
    }
}
