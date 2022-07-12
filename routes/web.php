<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__ . '/auth.php';


    Route::prefix("/{locale}")->group(function () {
        require __DIR__ . '/routes.php';
    });

//    require __DIR__ . '/routes.php';


Route::get('/', [\App\Http\Controllers\IndexController::class, 'index'])->name('index')->whereIn('locale', ['en', 'ru']);

Route::middleware('auth')->group(function () {
    Route::post('/order-store', [\App\Http\Controllers\OrderController::class, 'store'])->name('order.store');
});
