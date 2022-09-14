<?php

class TwigJin
{
	/**
	 *
	 */
	public function __construct(Dotink\Jin\Parser $parser)
	{
		$this->parser = $parser;
	}


	/**
	 *
	 */
	public function __invoke($string)
	{
		try {
			return $this->parser->parse($string)->get();
		} catch (Exception $e) {
			return $e->getMessage();
		}
	}
}
