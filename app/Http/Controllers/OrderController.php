<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;

class OrderController extends Controller
{
    /**
     * @param OrderRequest $request
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function store(OrderRequest $request): \Inertia\Response|\Inertia\ResponseFactory
    {
        $data = $request->validated();
        $data['user_id'] = $request->user()->id;
        $order = Order::create($data);
        return inertia('order.store', ['entry' => $order]);
    }
}
