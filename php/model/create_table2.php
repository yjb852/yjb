<?php
require('./_connect.php');

//书写sql语句
$sql = "CREATE TABLE `info` (
			id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
			name VARCHAR(300) NOT NULL,
			password VARCHAR(300) NOT NULL
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "用户数据表创建成功";
}else{
	echo "用户数据表创建失败";
}

?>