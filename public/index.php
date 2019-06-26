<?php

use Psr\Http\Server\RequestHandlerInterface as Handler;
use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\HttpHandlerRunner\Emitter\SapiEmitter as Emitter;

//
// Track backwards until we discover our composer.json.
//

for (
	$root_path  = __DIR__;
	$root_path != '/' && !is_file($root_path . DIRECTORY_SEPARATOR . 'composer.json');
	$root_path  = realpath($root_path . DIRECTORY_SEPARATOR . '..')
);

$loader  = require $root_path . '/vendor/autoload.php';
$hiraeth = new Hiraeth\Application($root_path);

$hiraeth->exec(function(Handler $handler, Request $request, Emitter $emitter) {
	return $emitter->emit($handler->handle($request)) ? 0 : 1;
});