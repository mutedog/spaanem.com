<?php

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\ListOfType;
use GraphQL\Type\Schema;

use GraphQL\Type\Definition\ScalarType;
use GraphQL\Language\AST\StringValueNode;
use GraphQL\Language\AST\Node;
use HTMLPurifier;
use HTMLPurifier_Config;

class SafeHtmlType extends ScalarType {
	private $purifier;

	public function __construct() {
		$config = HTMLPurifier_Config::createDefault();
		$config->set('HTML.Allowed', 'p,b,a[href],i,em,strong,br,ul,ol,li,div');
		$this->purifier = new HTMLPurifier($config);

		parent::__construct([
			'name' => 'SafeHtml',
			'description' => 'HTML content that has been sanitized'
		]);
	}

	public function serialize($value): string {
		//sanitize the HTML and return it
		return $this->purifier->purify($value);
	}

	public function parseValue($value): string {
		return $this->purifier->purify($value);
	}

	public function parseLiteral($valueNode, ?array $variables = null): string {
		if (!$valueNode instanceOf StringValueNode) {
			throw new \Exception('SafeHtml type can only parse string values');
		}
		return $this->purifier->purify($valueNode->value);
	}
}


$db = new PDO('mysql:host=127.0.0.1:3306;dbname=resume', 'resume', 'password');


try {
	//db connection with error handling
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
	die("Database connection failed: " . $e->getMessage());
}


$sampleType = new ObjectType([
	'name'=>'Samples',
	'fields'=>[
		'show'=>['type'=>Type::boolean()],
		'title'=>['type'=>Type::string()],
		'url'=>['type'=>Type::string()],
		'details'=>['type'=>new SafeHtmlType()]
	]
]);

$jobType = new ObjectType([
	'name'=>'Jobs',
	'fields'=>[
		'Company'=>['type'=>Type::string()],
		'JobTitle'=>['type'=>Type::string()],
		'StartDate'=>['type'=>Type::string()],
		'EndDate'=>['type'=>Type::string()],
		'Details'=>['type'=>new SafeHtmlType()]
	]
]);

$schoolType = new ObjectType([
	'name'=>'Schools',
	'fields'=>[
		'Name'=>['type'=>Type::string()],
		'Details'=>['type'=>new SafeHtmlType()]
	]
]);

$linkType = new ObjectType([
	'name'=>'Link',
	'fields'=>[
		'Name'=>['type'=>Type::string()],
		'URL'=>['type'=>Type::string()]
	]
]);

$rootquery = new ObjectType([
	'name' => 'Query',
	'fields' => [
		'schools' => [
			'type' => Type::listOf($schoolType),
			'resolve' => function( $root, $args) use ($db) {
				try {
					$stmt = $db->query("SELECT * FROM Schools ORDER BY id ASC");
					$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

					//decode HTML entities
					foreach($reuslts as $row) {
						if (isset($row['details'])) {
							$row['details'] = html_entity_decode($row['details'], ENT_QUOTES, 'UTF-8');
						}
					}

					return $results;
				} catch (PDOException $e) {
					error_log("Query failed: " .$e->getMessage());
					return [];
				}
			}
		],
		'samples' => [
			'type' => Type::listOf($sampleType),
			'resolve' => function( $root, $args) use ($db) {
				try {
					$stmt = $db->query("SELECT * FROM Samples WHERE display = 1");
					$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

					//decode HTML entities
					foreach($reuslts as $row) {
						if (isset($row['details'])) {
							$row['details'] = html_entity_decode($row['details'], ENT_QUOTES, 'UTF-8');
						}
					}

					return $results;
				} catch (PDOException $e) {
					error_log("Query failed: " .$e->getMessage());
					return [];
				}
			}
		],
		'jobs' => [
			'type' => Type::listOf($jobType),
			'resolve' => function( $root, $args) use ($db) {
				try {
					$stmt = $db->query("SELECT * FROM Jobs ORDER BY id DESC");
					$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

					//decode HTML entities
					foreach($reuslts as $row) {
						if (isset($row['details'])) {
							$row['details'] = html_entity_decode($row['details'], ENT_QUOTES, 'UTF-8');
						}
					}

					return $results;
				} catch (PDOException $e) {
					error_log("Query failed: " .$e->getMessage());
					return [];
				}
			}
		],
		'skills' => [
			'type' => Type::listOf($linkType),
			'resolve' => function( $root, $args) use ($db) {
				try {
					$stmt = $db->query("SELECT * FROM Skills ORDER BY id ASC");
					$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

					return $results;
				} catch (PDOException $e) {
					error_log("Query failed: " .$e->getMessage());
					return [];
				}
			}
		],
		'extras' => [
			'type' => Type::listOf($linkType),
			'resolve' => function( $root, $args) use ($db) {
				try {
					$stmt = $db->query("SELECT * FROM Extras ORDER BY id ASC");
					$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

					return $results;
				} catch (PDOException $e) {
					error_log("Query failed: " .$e->getMessage());
					return [];
				}
			}
		],
	]
]);


$schema = new Schema([
	'query' => $rootquery
]);

// Return the schema object for use in the GraphQL server
return $schema;