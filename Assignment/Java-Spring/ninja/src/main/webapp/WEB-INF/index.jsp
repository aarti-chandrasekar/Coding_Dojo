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
    <title>Dojos</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
</head>
<body>
<div class="row d-flex justify-content-center text-white">
    <%--  List of Dojos  --%>
    <div class="row d-flex bg-dark m-2 p-2 w-50 ">
        <div class="d-flex justify-content-between align-items-center">
        <h1>
            Dojos
        </h1>
            <div><a href="/ninjas/new" class="btn btn-success">Create Ninjas</a></div>
        </div>

        <table class="table table-bordered border-primary text-center text-white">
            <thead>
            <tr class="bg-primary">
                <td>Name</td>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="element" items="${dojoList}">
                <tr>
                    <td>
                        <a href="/dojos/${element.id}">${element.name}</a>
                    </td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>

    <%--  Add Dojo      --%>
    <div class="row d-flex bg-dark m-2 p-2 w-50 text-white  ">
        <h1>
            New Dojo
        </h1>

        <%--@elvariable id="expense" type="Expense"--%>
        <form:form action="/dojos" method="post" modelAttribute="dojo">
            <div class="form-group">
                <form:label path="name" cssClass="form-label">Name :</form:label>
                <form:input path="name" cssClass="form-control"/>
                <form:errors path="name" cssClass="text-danger"/>
            </div>

            <input type="submit" value="Create" class="btn btn-primary"/>
        </form:form>
    </div>
</body>
</html>