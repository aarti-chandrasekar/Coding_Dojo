<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fruit Store</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
</head>
<body>
<div class="d-flex justify-content-center text-white">
    <div class="row d-flex bg-dark m-2 p-2 w-50 justify-content-between align-items-center">
        <h1 class="text-danger">
            <c:out value="Fruit Store"/>
        </h1>

        <table class="table-bordered table-dark border-danger ">
            <thead>
            <tr class="bg-danger">
                <td>Name</td>
                <td>Price</td>
            </tr>
            </thead>
            <tbody>
            <c:forEach var="fruit" items="${fruitList}">
                <tr>
                    <td><c:out value="${fruit.name}" /></td>
                    <td><fmt:formatNumber value="${fruit.price}" type="currency"/></td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>
</body>
</html>