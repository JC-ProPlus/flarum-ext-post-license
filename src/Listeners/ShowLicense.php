<?php

namespace WvbForum\PostLicense\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\PostSerializer;
use Illuminate\Contracts\Events\Dispatcher;

class ShowLicense
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'serializing']);
    }

    public function serializing(Serializing $event)
    {
        if ($event->serializer instanceof PostSerializer) {
            $event->attributes['wvbforumPostLicense'] = $event->model->wvbforum_post_license;
        }
    }
}
