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
    <title>Edit Expense</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
</head>
<body>
<div class="row d-flex justify-content-center text-white">
    <%--  Edit Expense      --%>
    <div class="row d-flex bg-dark m-2 p-2 w-50 text-white  ">
        <div class="d-flex justify-content-between">
            <h1>
                Edit Expense
            </h1>
            <a href="/expenses">Go Back</a>
        </div>

        <%--@elvariable id="expense" type="Expense"--%>
        <form:form action="/expenses/edit/${expense.id}" method="put" modelAttribute="expense">
            <div class="form-group">
                <form:label path="name" cssClass="form-label">Name :</form:label>
                <form:input path="name" cssClass="form-control"/>
                <form:errors path="name" cssClass="text-danger"/>
            </div>
            <div class="form-group">
                <form:label path="vendor" cssClass="form-label">Vendor :</form:label>
                <form:input path="vendor" cssClass="form-control"/>
                <form:errors path="vendor" cssClass="text-danger"/>
            </div>
            <div class="form-group">
                <form:label path="amount" cssClass="form-label">Amount :</form:label>
                <form:input path="amount" type="number" cssClass="form-control"/>
                <form:errors path="amount" cssClass="text-danger"/>
            </div>
            <div class="form-group">
                <form:label path="description" cssClass="form-label">Description :</form:label>
                <form:textarea path="description" cssClass="form-control"/>
                <form:errors path="description" cssClass="text-danger"/>
            </div>

            <input type="submit" value="Submit" class="btn btn-primary"/>
        </form:form>
    </div>
</body>
</html>