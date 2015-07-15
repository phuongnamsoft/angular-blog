<?php
header('Content-Type: application/json');

class MySQL {
    protected $result_array;
    private $hostname = 'localhost';
    private $username = 'root';
    private $password = '';
    private $database = 'test';
    private $charset = 'utf-8';
    static $db_link;

    public function __construct($config = array()) {
        $this->connect();
    }

    public function connect() {
        self::$db_link = mysql_connect($this->hostname, $this->username, $this->password);
        mysql_select_db($this->database, self::$db_link);
        mysql_set_charset($this->charset, self::$db_link);
    }
    private function tableExists($table) {
        $tablesInDb = mysql_query('SHOW TABLES FROM ' . $this->database . ' LIKE "' . $table . '"', self::$db_link);
        if ($tablesInDb) {
            if (mysql_num_rows($tablesInDb) == 1) {
                return true;
            } else {
                return false;
            }
        }
    }
    public function select($query) {
        $result = mysql_query($query, self::$db_link);
        $result_array = array();
        while ($row = mysql_fetch_assoc($result)) {
            $result_array[] = $row;
        }
        $this->result_array = $result_array;
        return $this->result_array;
    }
    public function object() {
        
    }
    public function insert($query) {
        mysql_query($query, self::$db_link);
        //return mysql_affected_rows(); //Dung de thong bao co su thay doi cua cac dong
        return mysql_insert_id(self::$db_link);
    }
    public function delete($query) {
        mysql_query($query, self::$db_link);
        return mysql_affected_rows(self::$db_link);
    }
    public function update($query) {
        mysql_query($query, self::$db_link);
        return mysql_affected_rows(self::$db_link);
    }
}

$query = new MySQL();
if (isset($_GET['api'])){
  $get = $_GET;
  $data = array();
  if($get['api'] == 'listpost'){
    extract($get);
    $data['result'] = $query->select("Select p.*,u.fullname as fullname from post p join `users` u ON p.userid = u.id limit $offset,$limit");
    $data['error'] = 0;
  }
  elseif($get['api'] == 'postincategory'){
    extract($get);
    $data['result'] = $query->select("Select p.*,u.fullname as fullname from post p join `users` u ON p.userid = u.id where p.cid = $cid limit $offset,$limit");
    $data['error'] = 0;

  }
  else if($get['api'] == 'listcategory'){
    $data['result'] = $query->select("Select * from category");
    $data['error'] = 0;

  }

  else if($get['api'] == 'post'){
    $data['error'] = 0;
    $id = $get['id'];
    $data['result'] = $query->select("Select p.*,u.fullname as fullname from post p join `users` u ON p.userid = u.id where p.id = $id");

  }
  else if($get['api'] == 'allpost'){
    $data['result'] = $query->select("Select p.*,u.fullname as fullname from post p join `users` u ON p.userid = u.id");
    $data['error'] = 0;
  }
  else {
    $data['error'] = 1;
  }

  echo json_encode($data);

}
