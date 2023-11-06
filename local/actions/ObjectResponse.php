<?php

class ObjectResponse extends AbstractAction
{
	public function __invoke()
	{
		$data = [
			'title' => 'This was a test'
		];

		return $this->object($data);
	}
}
