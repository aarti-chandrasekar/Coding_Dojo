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
    <title>Login Registration</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
</head>

<body>
<div class="container align-content-center text-white">
    <div class="d-flex justify-content-between m-3 gap-5">

        <!-- Left Container -->
        <!-- Register Container -->
        <div class="container bg-dark">
            <h1 class="text-primary">Register</h1>

            <form:form action="/register" method="POST" modelAttribute="regUser">
                <!-- First Name -->
                <div class="form-group">
                    <form:label path="firstName" cssClass="form-label">First Name :<span
                            class="text-danger font-weight-bold"> *
                    </form:label>
                    <form:input path="firstName" cssClass="form-control rounded"/>
                    <form:errors path="firstName" cssClass="text-danger"/>
                </div>

                <!-- Last Name -->
                <div class="form-group">
                    <form:label path="lastName" cssClass="form-label">Last Name :<span
                            class="text-danger font-weight-bold"> *
                    </form:label>
                    <form:input path="lastName" cssClass="form-control rounded"/>
                    <form:errors path="lastName" cssClass="text-danger"/>
                </div>

                <!-- Email -->
                <div class="form-group">
                    <form:label path="email" cssClass="form-label">Email :<span
                            class="text-danger font-weight-bold"> *
                    </form:label>
                    <form:input type="email" path="email" cssClass="form-control rounded"/>
                    <form:errors path="email" cssClass="text-danger"/>
                </div>

                <!-- Password -->
                <div class="form-group">
                    <form:label path="password" cssClass="form-label">Password :<span
                            class="text-danger font-weight-bold"> *
                    </form:label>
                    <form:input type="password" path="password" cssClass="form-control rounded"/>
                    <form:errors path="password" cssClass="text-danger"/>
                </div>

                <!-- Confirm Password -->
                <div class="form-group">
                    <form:label path="confirm" cssClass="form-label">Confirm Password :<span
                            class="text-danger font-weight-bold"> *
                    </form:label>
                    <form:input type="password" path="confirm" cssClass="form-control rounded"/>
                    <form:errors path="confirm" cssClass="text-danger"/>
                </div>

                <input type="submit" value="Register" class="form-group btn btn-primary my-2">
            </form:form>
        </div>

        <!-- Right Container -->
        <!-- Login Container -->
        <div class="container bg-dark">
            <h1 class="text-success">Login</h1>

            <form:form action="/login" method="POST" modelAttribute="loginUser">
                <input type="hidden" name="form" value="login">

                <!-- Email -->
                <div class="form-group">
                    <form:label path="email" cssClass="form-label">Email :<span
                        class="text-danger font-weight-bold"> *
                    </form:label>
                    <form:input type="email" path="email" cssClass="form-control rounded"/>
                    <form:errors path="email" cssClass="text-danger"/>
                </div>

                <!-- Password -->
                <div class="form-group">
                    <form:label path="password" cssClass="form-label">Password :<span
                        class="text-danger font-weight-bold"> *
                    </form:label>
                    <form:input type="password" path="password" cssClass="form-control rounded"/>
                    <form:errors path="password" cssClass="text-danger"/>
                </div>

                <input type="submit" value="Login" class="form-group btn btn-success my-2">
            </form:form>
        </div>
    </div>
</div>
</body>

</html>