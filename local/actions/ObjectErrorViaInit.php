<?php

class ObjectErrorViaInit extends AbstractAction
{
	public function __invoke()
	{
		$data = [
			'error' => 'This is an error response'
		];

		return $this->init(400)->object($data);
	}
}
