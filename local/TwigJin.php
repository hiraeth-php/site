<?php

use Dotink\Jin\Parser;

class TwigJin
{
	/**
	 * @var Parser
	 */
	protected $parser;


	/**
	 *
	 */
	public function __construct(Parser $parser)
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
