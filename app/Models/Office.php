<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Office extends Model
{
    use HasFactory;

    /** @var string[] */
    protected $fillable = [
        'slug',
        'name',
        'price',
        'desc',
    ];

    /**
     * Get value of attributes
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function attributes(): \Illuminate\Database\Eloquent\Relations\MorphMany
    {
        return $this->morphMany(AttributeValue::class, 'attributeable', 'rel_type', 'rel_id');
    }

    /**
     * @param Builder $query
     * @param $data
     * @return void
     */
    public function scopeFetch(Builder $query, $data): void
    {
        foreach ($data as $key => $value) {
            match ($key) {
                'priceMin' => $query->where('price','>=', $value),
                'priceMax' => $query->where('price','<=', $value),
                'area' => $query->whereHas('attributes', fn(Builder $q2) => $q2->where('value', '>=', $value)->whereHas('attribute', fn($q3) => $q3->where('key', 'area'))),
                'people' => $query->whereHas('attributes', fn(Builder $q2) => $q2->where('value', '>=', $value)->whereHas('attribute', fn($q3) => $q3->where('key', 'people'))),
                'comfort' => $query->whereHas('attributes', fn(Builder $q2) => $q2->where('value', $value)->whereHas('attribute', fn($q3) => $q3->where('key', $key))),
                default => ''
            };
        }
    }
}
