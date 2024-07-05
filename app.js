const express = require('express')
const { body,validationResult } = require("express-validator");

const app = express ();
app.use(express.json());

// assuming InvoiceItems is
const InvoiceItems = {
    Id: 1,
    itemName: 'ItemX',
    Quantity: 2.0,
    Price: 50,
    Amount: 100.0
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    
    response.send(status);
 });

// This is Working
 app.post("/create",body("Amount").isInt(),(request, response) => {
    const status = {
       "Status": "Running create",
    };
    // return response.send(status)
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({
              success: false,
              errors: errors.array(),
            });
          }
        res= { success: true };
        
        response.send(res);
    } catch (err) {
        // next(err);
        err = {
            "Error": "Something went wrong"
        }
        response.send(err);
    }
 });


 app.patch("/update", (request, response) => {
    const status = {
       "Status": "Running update"
    };
    
    response.send(status);
 });


 app.delete("/delete", (request, response) => {
    const status = {
       "Status": "Running delete"
    };
    
    response.send(status);
 });

 app.get("/retrieve", (request, response) => {
    const status = {
       "Status": "Running retrieve"
    };
    
    response.send(status);
 });

 app.get("/list", (request, response) => {
    const listReturned = []
    const status = {
       "Status": "Running list"
    };
    
    response.send(status);
 });