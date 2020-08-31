<?php namespace App\Controllers;

class Home extends BaseController
{
	public function index()
	{
		return view('frontend');
	}

	public function testAPI()
	{
		return $this->response->setJSON(
		[
			'message' => 'Hello from CodeIgniter!',
		]);
	}
}
