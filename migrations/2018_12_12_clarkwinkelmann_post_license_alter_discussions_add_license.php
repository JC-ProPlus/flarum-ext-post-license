<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('posts', function (Blueprint $table) {
            $table->string('clarkWinkelmann_post_license')->nullable();
        });
    },
    'down' => function (Builder $schema) {
        $schema->table('posts', function (Blueprint $table) {
            $table->dropColumn('clarkWinkelmann_post_license');
        });
    },
];
