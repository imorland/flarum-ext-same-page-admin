<?php

/*
 * This file is part of ianm/same-page-admin.
 *
 * Copyright (c) 2022 IanM.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace IanM\SamePageAdmin;

use Flarum\Extend;

return [
    
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
];
