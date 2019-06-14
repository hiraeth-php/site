<?php

/**
 *
 */
class ViewHome extends AbstractAction
{
	/**
	 *
	 */
	public function __invoke(TestInspector $inspector, Hiraeth\Session\ManagerInterface $session, $name, $id)
	{
		throw new RuntimeException('Test');

		$session->getSegment('test')->set('word', 'foo');

		return 'OK';

		return $this->template('@pages/home.xml');

		return [];

		return 'test';

		return $this->redirect('/fuck');

		return $this->response(408, NULL, []);

		return $this->template('@pages/home.html');
	}
}
