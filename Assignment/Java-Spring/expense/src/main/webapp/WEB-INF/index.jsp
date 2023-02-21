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
    <title>Track Expenses</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
</head>
<body>
<div class="row d-flex justify-content-center text-white">
    <%--  List of Expenses  --%>
    <div class="row d-flex bg-dark m-2 p-2 w-50 ">
        <h1>
            Save Travels
        </h1>
        <form:form action="/expenses/search" method="post" modelAttribute="expense">
            <form:label path="searchKey">Search Expense by Name :</form:label>
            <form:input path="searchKey"/>

            <%--            <label for="searchKey">Search Expense by Name :</label>--%>
            <%--            <input type="text" name="searchKey" id="searchKey"/>--%>
            <input type="submit" value="Search" class="btn btn-success me-3"/>
        </form:form>

        <table class="table table-bordered border-primary text-center text-white">
            <thead>
            <tr class="bg-primary">
                <td>Expense</td>
                <td>Vendor</td>
                <td>Amount</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="item" items="${expenseList}">
                <tr>
                    <td>
                        <a href="/expenses/${item.id}">${item.name}</a>
                    </td>
                    <td><c:out value="${item.vendor}"/></td>
                    <td><fmt:formatNumber value="${item.amount}" type="currency"/></td>
                    <td class="d-flex">
                        <form:form action="/expenses/${item.id}" method="delete">
                            <input type="submit" value="Delete" class="btn btn-danger me-3"/>
                        </form:form>
                        <a href="/expenses/edit/${item.id}" class="btn btn-warning">Edit</a>
                    </td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>

    <%--  Add Expense      --%>
    <div class="row d-flex bg-dark m-2 p-2 w-50 text-white  ">
        <h1>
            Add an Expense
        </h1>

        <%--@elvariable id="expense" type="Expense"--%>
        <form:form action="/expenses" method="post" modelAttribute="expense">
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