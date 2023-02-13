<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>Customer Name : <c:out value="${name}" /></h1>
<h3>Item Name : <c:out value="${itemName}" /></h3>
<h3>Price : $<c:out value="${price}" /></h3>
<h3>Description : <c:out value="${description}" /></h3>
<h3>Vendor : <c:out value="${vendor}" /></h3>
</body>
</html>