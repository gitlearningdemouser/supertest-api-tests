const { parseExpectedArgs } = require('commander');
const supertest = require('supertest');
const supertesst = require('supertest');

const host = "http://localhost:3000";
const request = supertest(host);

const mockedUsers = [
    {
        id:1,
        name: "abc",
        email: "abc@yahoo.com",
        department: "marketing"
    },
    {
        id:2,
        name:"xyz",
        email: "xyz@gmail.com",
        department: "sales"
    }
];

describe("Users API test Suite.",()=>{

    it("should get all users.", async()=>{
        const response = await request.get("/users");

        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBeNull();
        expect(response.body).toEqual(mockedUsers);
    });


    it("should get single user details for an id", async()=>{
        const response = await request.get("/users/2");
        console.log('status code : ' + response.statusCode);
        console.log(response.body[0]);

        expect(response.status).toBe(200);
        expect(response.body[0]).not.toBeNull();
        expect(response.body[0].name).toBe('xyz');
        expect(response.body[0].department).toEqual('sales');

    
    
    
    
    });

    it("", async()=>{
        
    });


    it("", async()=>{

    });


});
