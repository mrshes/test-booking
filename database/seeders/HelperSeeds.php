<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;

class HelperSeeds
{
    /**
     * @param \Illuminate\Database\Eloquent\Model $model
     * @param array $data
     * @param $autoincrement
     * @return array
     */
    public static function make(\Illuminate\Database\Eloquent\Model $model, array $data, $autoincrement = true ): array
    {
        $table = DB::table($model->getTable());
        $table->delete();
        $id = 1;
        $records = [];
        foreach ($data as $record) {
            if ($autoincrement){
                if (!array_key_exists('id', $record)) $record['id'] = $id;
            }
            $record = $model->create($record);
            array_push($records, $record);
            $id++;
        }
        return $records;
    }
}
