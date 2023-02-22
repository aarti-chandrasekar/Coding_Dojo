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
    <title>Ninja List</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
</head>
<body>
<div class="row d-flex justify-content-center text-white">
    <%--  List of Ninjas  --%>
    <div class="row d-flex bg-dark m-2 p-2 w-50 ">
        <div class="d-flex justify-content-between">
            <h1>
                ${dojoName} Location Ninjas
            </h1>
            <a href="/dojos">Go Back</a>
        </div>

        <table class="table table-bordered bordbg-success text-center text-white">
            <thead>
            <tr class="bg-success">
                <td>First Name</td>
                <td>Last Name</td>
                <td>Age</td>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="element" items="${ninjaList}">
                <tr>
                    <td><c:out value="${element.firstName}"/></td>
                    <td><c:out value="${element.lastName}"/></td>
                    <td><c:out value="${element.age}"/></td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</body>
</html>