<?php
require 'vendor/autoload.php'; // Autoload Composer dependencies
use GraphQL\GraphQL;
use GraphQL\Type\Schema;

// Load Schema
$schema = require 'schema.php';

// Get the raw query from the HTTP request
$query = isset($_GET['query']) ? $_GET['query'] : null;

if (!$query) {
	echo "Please provide a GraphQL query as a 'query' parameter.";
	exit;
}

try {
	// execute the query
	$result = GraphQL::executeQuery($schema, $query, null, null, $variables);
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Content-Type, Authorization');
	// header('Access-Control-Allow-Credentials: true');
	header('Content-Type: application/json');

	if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
		http_response_code(200);
		exit();
	}
	echo json_encode($result->toArray(), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
} catch (\Exception $e) {
	echo 'Error executing GraphQL query: ' . $e->getMessage();
}