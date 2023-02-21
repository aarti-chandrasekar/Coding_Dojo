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
    <title>View Expense</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
</head>
<body>
<div class="row d-flex justify-content-center text-white">
    <div class="row d-flex bg-dark m-2 p-2 w-50 text-white  ">
        <div class="d-flex justify-content-between">
            <h1>
                Expense Details
            </h1>
            <a href="/expenses">Go Back</a>
        </div>

        <%--@elvariable id="expense" type="Expense"--%>
        <div>
            <div class="row pb-2">
                <div class="col-3">Expense Name :</div>
                <div class="col-6">${expense.name}</div>
            </div>
        </div>
        <div>
            <div class="row pb-2">
                <div class="col-3">Description :</div>
                <div class="col-6">${expense.description}</div>
            </div>
        </div>
        <div>
            <div class="row pb-2">
                <div class="col-3">Vendor :</div>
                <div class="col-6">${expense.vendor}</div>
            </div>
        </div>
        <div>
            <div class="row pb-2">
                <div class="col-3">Amount Spent :</div>
                <div class="col-6"><fmt:formatNumber value="${expense.amount}" type="currency"/></div>
            </div>
        </div>
    </div>
</div>
</body>
</html>