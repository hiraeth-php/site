<?php

class RedirectFoundViaResponse extends AbstractAction
{
	public function __invoke()
	{
		return $this->response(302, $this->redirect('/'));
	}
}
