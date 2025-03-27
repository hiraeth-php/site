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
		$this->parser = new Parser(
			[],
			[
				'run!' => function() {
					return '<nice try>';
				}
			]
		);
	}


	/**
	 *
	 */
	public function __invoke($string)
	{
		try {
			return $this->parser->parse($string)->get();
		} catch (Exception|ErrorException $e) {
			return $e->getMessage();
		}
	}
}
