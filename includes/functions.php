<?php
    // include the file we just wrote - connect
     // like a JS import statement

    $result = array();

    function getAllUsers($conn) {
        $query = "SELECT * FROM tbl_mini_cooper";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo (json_encode($result));
    }

    function getSingleUser($conn, $target) {
        $query = "SELECT * FROM tbl_mini_cooper WHERE id=" . $target . "";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }

        //return $result;
        echo (json_encode($result));
    }