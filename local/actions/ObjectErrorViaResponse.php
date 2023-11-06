<?php

class ObjectErrorViaResponse extends AbstractAction
{
	public function __invoke()
	{
		$data = [
			'error' => 'This is an error response'
		];

		return $this->response(400, $this->object($data));
	}
}
