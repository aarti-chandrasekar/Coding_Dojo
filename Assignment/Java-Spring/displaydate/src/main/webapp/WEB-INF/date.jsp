<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.util.Date" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Display Date</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
</head>
<body onload="dateAlert()">
<div class="container m-5 px-5">
    <div class="d-flex justify-content-center px-5">
        <h1 class="text-danger">
            <% SimpleDateFormat sdf = new SimpleDateFormat("EEEE, MMM dd, YYYY"); %>
            <c:out value="<%= sdf.format(new Date()) %>"/>
        </h1>
    </div>
</div>
<script type="text/javascript" src="/js/script.js"></script>
</body>
</html>