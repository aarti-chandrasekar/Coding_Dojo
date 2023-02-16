<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Omikuji - View</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
</head>
<body>
<div class="d-flex justify-content-center text-white">
    <div class="row d-flex bg-dark m-2 p-2 w-50 justify-content-between align-items-center">
        <h1 class="p-3">
            Here's your Omikuji
        </h1>
        <h2 class="bg-primary">
            In ${sessionScope.numberPick} years, you will live in ${sessionScope.city} with
            ${sessionScope.person} as your roommate, ${sessionScope.hobby}. The next
            time you see a ${sessionScope.thing}, you will have good luck. Also, ${sessionScope.niceText}
        </h2>
        <a class="p-3" href="/omikuji">Go Back</a>
    </div>
</div>
</body>
</html>