<?php

class RedirectResponse extends AbstractAction
{
	public function __invoke()
	{
		return $this->redirect('/');
	}
}
