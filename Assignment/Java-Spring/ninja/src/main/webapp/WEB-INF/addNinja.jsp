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
    <title>Add Ninja</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
</head>
<body>
<div class="row d-flex justify-content-center text-white">
    <div class="row d-flex bg-dark m-2 p-2 w-50 text-white  ">
        <div class="d-flex justify-content-between">
            <h1>
                New Ninja
            </h1>
            <a href="/dojos">Go Back</a>
        </div>

        <%--@elvariable id="ninja" type=""--%>
        <form:form action="/ninjas/new" method="post" modelAttribute="ninja">
            <div class="form-group">
                <form:label path="dojo" cssClass="form-label">Dojo :</form:label>
                <form:select path="dojo" cssClass="form-control">
                    <form:options items="${dojoList}" itemLabel="name" itemValue="id"/>
                </form:select>
            </div>
            <div class="form-group">
                <form:label path="firstName" cssClass="form-label">First Name :</form:label>
                <form:input path="firstName" cssClass="form-control"/>
                <form:errors path="firstName" cssClass="text-danger"/>
            </div>
            <div class="form-group">
                <form:label path="lastName" cssClass="form-label">Last Name :</form:label>
                <form:input path="lastName" cssClass="form-control"/>
                <form:errors path="lastName" cssClass="text-danger"/>
            </div>
            <div class="form-group">
                <form:label path="age" cssClass="form-label">Age :</form:label>
                <form:input path="age" type="number" cssClass="form-control"/>
                <form:errors path="age" cssClass="text-danger"/>
            </div>

            <input type="submit" value="Create" class="btn btn-primary"/>
        </form:form>
    </div>
</div>
</body>
</html>