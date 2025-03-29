<?php

class HelloWorld extends \AbstractAction
{
	public function __invoke($name = 'World')
	{
		return [
			'name' => ucwords($name)
		];
	}
}
