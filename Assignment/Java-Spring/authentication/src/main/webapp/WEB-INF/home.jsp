<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page isErrorPage="true" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home Page</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
</head>
<body>
<div class="row d-flex justify-content-center text-white">
    <div class="row d-flex bg-dark m-2 p-2 w-50 text-white  ">
        <div class="d-flex justify-content-between">
            <h1>
                Welcome, ${loggedinUser.firstName} ${loggedinUser.lastName} !
            </h1>
            <a href="/logout">Logout</a>
        </div>

        <div>
            <h2>This is your dashboard</h2>
        </div>
    </div>
</div>
</body>
</html>