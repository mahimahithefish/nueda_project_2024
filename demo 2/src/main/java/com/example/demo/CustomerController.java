package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/accounts")
public class CustomerController {

    private final CustomerAccountService customerAccountService;

    @Autowired
    public CustomerController(CustomerAccountService customerAccountService) {
        this.customerAccountService = customerAccountService;
    }

    @GetMapping
    public ResponseEntity<List<CustomerAccount>> getAllUsers() {
        List<CustomerAccount> users = customerAccountService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerAccount> getUserById(@PathVariable("id") Long id) {
        Optional<CustomerAccount> user = customerAccountService.getUserById(id);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<CustomerAccount> createUser(@RequestBody CustomerAccount user) {
        CustomerAccount createdUser = customerAccountService.createCustomerAccount(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomerAccount> updateUser(@PathVariable("id") Long id, @RequestBody CustomerAccount userDetails) {
        CustomerAccount updatedUser = customerAccountService.updateCustomerAccount(id, userDetails);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
        customerAccountService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
