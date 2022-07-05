<?php

namespace Database\Seeders;

use App\Models\Attribute;
use Database\Seeders\HelperSeeds;
use Illuminate\Database\Seeder;

class AttributeSeeder extends Seeder
{
    /** @var array */
    protected array $data = [
        [
            'key' => 'area',
            'title' => 'площадь (м2)',
            'type' => 'INT',
        ],
        [
            'key' => 'city',
            'title' => 'город',
            'type' => 'TEXT',
        ],
        [
            'key' => 'people',
            'title' => 'количество мест',
            'type' => 'INT',
        ],
        [
            'key' => 'comfort',
            'title' => 'Удобства',
            'type' => 'MULTISELECT',
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        HelperSeeds::make(new Attribute(), $this->data);
    }
}
