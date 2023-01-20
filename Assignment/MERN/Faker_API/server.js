const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

const createUser = () => {
    [fName, lName] = [faker.name.firstName(), faker.name.lastName()];
    return {
        _id: faker.datatype.uuid(),
        firstName: fName,
        lastName: lName,
        phoneNumber: faker.phone.number(),
        email: faker.helpers.unique(faker.internet.email, [fName, lName]),
        password: faker.internet.password(8)
    };
};

const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));