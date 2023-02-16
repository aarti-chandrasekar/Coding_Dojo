<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Omikuji</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"/>
</head>
<body>
<div class="d-flex justify-content-center text-white">
    <div class="row d-flex bg-dark m-2 p-2 w-50 justify-content-between align-items-center">
        <h1 class="">
            Send an Omikuji
        </h1>
        <form action="/omikuji/send" method="post" class="row d-flex">
            <div class="m-2 p-3 w-75 ">
                <div class="form-group mb-3">
                    <label for="numberPick" class="form-label text-white">Pick any number from 5 to 25 </label>
                    <input  class="form-control" type="number" name="numberPick" id="numberPick" value="0"/>
                </div>
                <div class="form-group mb-3">
                    <label for="city" class="form-label text-white">Enter the name of any city </label>
                    <input  class="form-control" type="text" name="city" id="city"/>
                </div>
                <div class="form-group mb-3">
                    <label for="person" class="form-label text-white">Enter the name of any real person </label>
                    <input  class="form-control" type="text" name="person" id="person"/>
                </div>
                <div class="form-group mb-3">
                    <label for="hobby" class="form-label text-white">Enter professional endeavor or hobby </label>
                    <input  class="form-control" type="text" name="hobby" id="hobby"/>
                </div>
                <div class="form-group mb-3">
                    <label for="thing" class="form-label text-white">Enter any type of living thing</label>
                    <input  class="form-control" type="text" name="thing" id="thing"/>
                </div>
                <div class="form-group mb-3">
                    <label for="niceText" class="form-label text-white">Say something nice to someone</label>
                    <textarea class="form-control" name="niceText" id="niceText"></textarea>
                </div>
                <h6>Send and show a friend</h6>
                <input type="submit" value="Send" class="btn btn-success"/>
            </div>
        </form>
    </div>
</div>
</body>
</html>