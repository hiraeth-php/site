<?php

namespace Words;

class Get extends \AbstractAction
{
	public function __invoke($word)
	{
		$template = sprintf('@pages/words/%s.html', $word);

		if (!$this->templates->has($template)) {
			return $this->response(
				404,
				$this->template('@pages/words/404.html', [
					'word' => $word
				])
			);
		}

		return [];
	}
}
