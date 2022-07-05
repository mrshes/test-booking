<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OfficeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'priceMin' => 'sometimes|numeric',
            'priceMax' => 'sometimes|numeric',
            'area' => 'sometimes|integer',
            'people' => 'sometimes|integer',
            'comfort' => 'sometimes|string|in:wifi,tv,кофемашина',
        ];
    }
}
